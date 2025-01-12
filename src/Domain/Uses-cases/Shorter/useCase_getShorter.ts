import { ShorterRepository } from "../../../Infraestructure/Repositories/ShorterRepository";
import { ShortUrlAdaper } from "../../Config/Adapters/ShortUrlAdapter";
import { UrlEntity } from "../../Entities/urls";
import { ValidateUrlService } from "../../Services/Shorter/ValidateUrl";



export class UseCaseGetShortenUrl{

    constructor(private readonly repo:ShorterRepository){

    }


    async execute(short:string):Promise<UrlEntity>{
         const url = await this.repo.getUrl(short);
        return url;
    }

}