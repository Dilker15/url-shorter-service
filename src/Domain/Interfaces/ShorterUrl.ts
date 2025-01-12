import { UrlEntity } from "../Entities/urls";



export interface ShorterUrl{

    createShortUrl(shortUrl:string,url:string):Promise<UrlEntity>;
    getUrl(shortUrl:string):Promise<UrlEntity>;
    updatetUrl(shortUrl:string,originalUrl:string):Promise<UrlEntity>;
    deleteUrl(shortUrl:string):Promise<UrlEntity>;
    
}