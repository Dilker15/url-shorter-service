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
       return UrlEntity.fromObjectToUrlEntity(url);
    }


    async updatetUrl(shortUrl: string, originalUrl: string): Promise<UrlEntity> {
        throw new Error("Method not implemented.");
    }
    async deleteUrl(shortUrl: string): Promise<UrlEntity> {
        throw new Error("Method not implemented.");
    }

}