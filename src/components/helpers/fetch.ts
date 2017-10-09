import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
export default class Fetch{
    constructor(private http:Http){

    }
    fetch = (url,method)=> {
        return (data)=>{
                let req = {
                    method: method,
                    url: url,
                    params:data
                };
                if(url.indexOf('http') === -1) {
                    // req.headers = {
                    //     'Cache-control':'no-store',
                    //     'Pragma':'no-cache',
                    //     'Expires': 0
                    // };
                }
                this.http.get(url).toPromise().then(data=>{
                    const responseCode = data['code'];
                    Promise.resolve(data)
                })
        }
        // if(method === 'POST'){
        //     return (data)=>{
        //         return this.http.post(url);
        //     }
        // }else if(method === 'GET'){
        //     return data => {
        //         return this.http.get(url);
        //     }
        // }
    }
}
