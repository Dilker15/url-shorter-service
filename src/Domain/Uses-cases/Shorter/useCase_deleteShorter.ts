import { ShorterRepository } from "../../../Infraestructure/Repositories/ShorterRepository";
import { ShortUrlAdaper } from "../../Config/Adapters/ShortUrlAdapter";
import { UrlEntity } from "../../Entities/urls";
import { ValidateUrlService } from "../../Services/Shorter/ValidateUrl";



export class UseCaseDeleteShortenUrl{

    constructor(private readonly repo:ShorterRepository){

    }


    async execute(shortUrl:string):Promise<UrlEntity>{
        
        if(!shortUrl){
            throw new Error('Short Url is missing')
        }
        const deletedUrl = await this.repo.deleteUrl(shortUrl);
        return deletedUrl;
    }

}