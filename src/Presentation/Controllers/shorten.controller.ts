import { Request,Response } from "express"
import { UseCaseCreateShortenUrl } from "../../Domain/Uses-cases/Shorter/useCase_createShorter"
import { UseCaseUpdateShortenUrl } from "../../Domain/Uses-cases/Shorter/useCase_updateShorter"
import { UseCaseDeleteShortenUrl } from "../../Domain/Uses-cases/Shorter/useCase_deleteShorter"
import { UseCaseGetShortenUrl } from "../../Domain/Uses-cases/Shorter/useCase_getShorter"


export class ShortenController{


  
    constructor(readonly createUc:UseCaseCreateShortenUrl,
        readonly updateUc:UseCaseUpdateShortenUrl,
        readonly deleteUc:UseCaseDeleteShortenUrl,
        readonly getUc:UseCaseGetShortenUrl
    ){}



    getUrl = async(req:Request,res:Response)=>{
        try{
            const short = req.params.shortUrl;
            const url = await this.getUc.execute(short);
            res.status(200).json(url);
        }catch(error){
            console.log(error);
            res.json({
                error,
             })
        }
    }


    createShorten = async(req:Request,res:Response)=>{
       try{
         const  urlCreated = await this.createUc.execute(req.body);
         res.status(200).json(urlCreated)
       }catch(error){
         console.log(error);

         res.status(400).json({
            error,
         })
       }
    }


    deleteUrl = async(req:Request,res:Response)=>{
       try{
            const urlDeleted = await this.deleteUc.execute(req.params.shortUrl);
            res.status(200).json(urlDeleted); 
       }catch(error){
        console.log(error);
         res.json({
            "error":error,
        })
       }
    }


    updateUrl = async(req:Request,res:Response)=>{
        const {shortUrl} = req.params;
        try{
            const updatedURL = await this.updateUc.execute(req.body,shortUrl);
            res.json({
                updatedURL,
            })
        }catch(error){
            console.log(error);
            res.json(
                error,
            )
        }

    }
}