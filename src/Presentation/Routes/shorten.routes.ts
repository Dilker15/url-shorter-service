
import {Router} from 'express';
import { ShortenController } from '../Controllers/shorten.controller';
import { UseCaseCreateShortenUrl } from '../../Domain/Uses-cases/Shorter/useCase_createShorter';
import { UseCaseUpdateShortenUrl } from '../../Domain/Uses-cases/Shorter/useCase_updateShorter';
import { UseCaseDeleteShortenUrl } from '../../Domain/Uses-cases/Shorter/useCase_deleteShorter';
import { UseCaseGetShortenUrl } from '../../Domain/Uses-cases/Shorter/useCase_getShorter';
import { ShorterRepository } from '../../Infraestructure/Repositories/ShorterRepository';
import { PrismaClient } from '@prisma/client';


export class ShortenRoutes{



    static startShortenRoutes():Router{
        const router=Router();
        const prisma = new PrismaClient();
        const shortenRepo = new ShorterRepository(prisma);

        const useCreate = new UseCaseCreateShortenUrl(shortenRepo);
        const useUpdate = new UseCaseUpdateShortenUrl(shortenRepo);
        const useDelete = new UseCaseDeleteShortenUrl(shortenRepo);
        const useGet = new UseCaseGetShortenUrl(shortenRepo);

        const shortController = new ShortenController(useCreate,useUpdate,useDelete,useGet);
        
        router.post('/',shortController.createShorten);
        router.get('/:shortUrl',shortController.getUrl);
        router.put('/:shortUrl',shortController.updateUrl);
        router.delete('/:shortUrl',shortController.deleteUrl);



        return router;
    }
}