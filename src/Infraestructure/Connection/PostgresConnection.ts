import { PrismaClient } from "@prisma/client";


export class PostgresConnection{

    static async starConnection():Promise<void>{
         const prisma = new PrismaClient();
         await prisma.$connect();
         console.log("Postgres Connected Succesfully");
    }
}