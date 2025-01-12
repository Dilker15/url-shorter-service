import { Router } from "express";
import { ShortenRoutes } from "./Routes/shorten.routes";


export class AppRoutes{


    static startAppRoutes():Router{
        const router = Router();
        router.use('/api/shorten',ShortenRoutes.startShortenRoutes());
        
        return router;
    }
}