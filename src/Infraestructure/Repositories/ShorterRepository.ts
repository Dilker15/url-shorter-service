import { PrismaClient } from "@prisma/client";
import { UrlEntity } from "../../Domain/Entities/urls";
import { ShorterUrl } from "../../Domain/Interfaces/ShorterUrl";



export class ShorterRepository implements ShorterUrl{

    constructor(private readonly prisma:PrismaClient){

    }

    async createShortUrl(shortUrl:string,url: string): Promise<UrlEntity> {
         const urlCreated = await this.prisma.urls.create({
            data:{
                short_url:shortUrl,
                url,
            }
         });
         return UrlEntity.fromObjectToUrlEntity(urlCreated);
    }


    async getUrl(shortUrl: string): Promise<UrlEntity> {
       const url = await this.prisma.urls.findFirst({
        where:{
            short_url:shortUrl,
        }
       });
       if(!url){
          throw new Error('Url was not found');
       }
       await this.prisma.urls.update({
            where:{
                id:url.id
            },
            data:{
                accesscount:{
                    increment:1
                }
            }
       })
       return UrlEntity.fromObjectToUrlEntity(url);
    }


    async updatetUrl(shortUrl: string, originalUrl: string): Promise<UrlEntity> {
        const url = await this.prisma.urls.findFirst({
            where:{
                short_url:shortUrl,
            }
        })
        if(!url){
            throw new Error('Url not found ');
        }
        const update = await this.prisma.urls.update({
            where:{
                short_url:shortUrl
            },
            data:{
                url:originalUrl,
                update_on:new Date(),
            }
        });

        return UrlEntity.fromObjectToUrlEntity(update);
    }

    async deleteUrl(shortUrl: string): Promise<UrlEntity> {
        const url = await this.prisma.urls.findFirst({
            where:{
                short_url:shortUrl
            }
        });
        if(!url){
            throw new Error('Short url not found');
        }
        const deletedUrl = await this.prisma.urls.delete({
            where:{
                id:url.id
            }
        });
        return UrlEntity.fromObjectToUrlEntity(deletedUrl);
    }

}