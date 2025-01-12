


export class ValidateUrlService{


    static validate(url:string):void{
        console.log("body in validate : ",url);
        if(!url){
            throw new Error('Url does not exist');
        }
        let match = this.verifyCorrectUrl(url);
        console.log("this is match : ", match)
    }


    private static verifyCorrectUrl(url:string):boolean{
        const urlRegex = /^(https?:\/\/)(www\.)?([a-zA-Z0-9\-_]+\.[a-zA-Z]{2,})(\/[\w\-\._~:\/?#\[\]@!$&'()*+,;=]*)?$/;
        return urlRegex.test(url);
    }
}