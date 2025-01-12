



export class UrlEntity{


    public id:string;
    public url:string;
    public created_on:Date;
    public updated_on:Date;
    public short_url:string;


    constructor(id:string,url:string,created_on:Date,updated_on:Date,short_url:string){
        this.created_on=created_on;
        this.updated_on=updated_on;
        this.short_url=short_url;
        this.id=id;
        this.url=url;
    }


    static fromObjectToUrlEntity(data:{[key:string]:any}){
        return new UrlEntity(data.id,data.url,data.created_on,data.updated_on,data.short_url);
    }

    

}