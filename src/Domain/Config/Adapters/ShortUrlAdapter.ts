
import crypto from 'crypto';


export class ShortUrlAdaper{


    static generateShortUrl(url:string):string{
        const hash = crypto.createHash('sha256').update(url).digest('base64url').slice(0, 8);
        return hash;
    }
}