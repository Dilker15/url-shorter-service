import { config } from "dotenv";
import express,{Application, urlencoded} from 'express';
import { AppRoutes } from "./AppRoutes";
import { PostgresConnection } from "../Infraestructure/Connection/PostgresConnection";
config();

export class Server{

    private readonly port:number;
    private readonly app:Application;

    constructor(){
        const port = process.env.PORT;
        if(!port){
            throw new Error('Port not Found');
        }
        this.port = parseInt(port);
        this.app=express();
        this.startMiddlewares();
        this.startRoutes();
        this.startConnection();
    }


    startMiddlewares():void{
        this.app.use(express.json());
        this.app.use(urlencoded({extended:true}));
    }


    startRoutes():void{
        this.app.use(AppRoutes.startAppRoutes());
    }



    async startConnection():Promise<void>{
        try{
           await PostgresConnection.starConnection();
           this.startServer();
        }catch(error){
            console.log("Connection was Wrong");
        }
    }


    startServer():void{
        this.app.listen(this.port,()=>{
            console.log("Server Listening on Port :",this.port);
        })
    }



}