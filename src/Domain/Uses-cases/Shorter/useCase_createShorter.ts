import { ShorterRepository } from "../../../Infraestructure/Repositories/ShorterRepository";
import { ShortUrlAdaper } from "../../Config/Adapters/ShortUrlAdapter";
import { UrlEntity } from "../../Entities/urls";
import { ValidateUrlService } from "../../Services/Shorter/ValidateUrl";



export class UseCaseCreateShortenUrl{

    constructor(private repo:ShorterRepository){

    }


    async execute(body:{[key:string]:any}):Promise<UrlEntity>{
        ValidateUrlService.validate(body.url);
        let shortUrl = ShortUrlAdaper.generateShortUrl(body.url);
        const url = await this.repo.createShortUrl(shortUrl,body.url);
        return url;
    }

}