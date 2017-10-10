import {Injectable}              from '@angular/core';
import {Http, Response}          from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export default class Fetch{
    constructor(private http:Http){

    }
    request = (url:string,method:string):any=>{
        if(method === 'post' || method === 'POST'){
            return (data)=>{
                 return this.post(url,data);
            }
        }else{
            return (params)=>{
                return this.get(url, params);
            }
        }
    }
    post = (url:string,params:any)=>{
        return this.http.post(url, params)
        .toPromise()
        .then(this.handleSuccess)
        .catch(res => this.handleError(res));
    }
    get = (url:string,params:any) =>{
        return this.http.get(url, {search: params})
        .toPromise()
        .then(this.handleSuccess)
        .catch(res => this.handleError(res));
    }
    private handleSuccess=(res:Response)=>{
        let body = res["_body"];
        if (body) {
          return {
            data: res.json().content || {},
            page: res.json().page || {},
            statusText: res.statusText,
            status: res.status,
            success: true
          }
        }
        else {
          return {
            statusText: res.statusText,
            status: res.status,
            success: true
          }
        }
    }
    private handleError=(error)=>{
        let msg = '请求失败';
        if (error.status == 400) {
          console.log('请求参数正确');
        }
        if (error.status == 404) {
          console.error('请检查路径是否正确');
        }
        if (error.status == 500) {
          console.error('请求的服务器错误');
        }
        console.log(error);
        return {success: false, msg: msg};
    }
}
