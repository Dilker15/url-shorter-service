import { ShorterRepository } from "../../../Infraestructure/Repositories/ShorterRepository";
import { ShortUrlAdaper } from "../../Config/Adapters/ShortUrlAdapter";
import { UrlEntity } from "../../Entities/urls";
import { ValidateUrlService } from "../../Services/Shorter/ValidateUrl";



export class UseCaseUpdateShortenUrl{

    constructor(private readonly repo:ShorterRepository){

    }


    async execute(body:{[key:string]:any},shortUrl:string):Promise<UrlEntity>{
        ValidateUrlService.validate(body.url);
        const updatedUrl = await this.repo.updatetUrl(shortUrl,body.url);
        return updatedUrl;
    }

}