


export class ValidateUrlService{


    static validate(url:string):void{
        
        if(!url){
            throw new Error('Url does not exist');
        }

        if(!this.verifyCorrectUrl(url)){
            throw new Error('Url is not correct');
        }

    }


    private static verifyCorrectUrl(url:string):boolean{
        const urlRegex = /^(https?:\/\/)(www\.)?([a-zA-Z0-9\-_]+\.[a-zA-Z]{2,})(\/[\w\-\._~:\/?#\[\]@!$&'()*+,;=]*)?$/;
        return urlRegex.test(url);
    }
}