import {Component,OnInit} from "@angular/core";
import { Router } from '@angular/router';
import {Md5} from "ts-md5/dist/md5";
import { validmethods } from "../../../utils/Validator";
import SigninService from "./signin.service";
const warnInfo = {
  errPhone: "请输入手机号码",
  errPassword: "请输入正确的密码",
  errLogin: "手机号码或密码错误",
}
@Component({
    selector:"signin",
    templateUrl:"../html/signin.tpl.html",
    providers: [SigninService],
})

export class SigninComponent implements OnInit{
    constructor(private SigninService : SigninService,private router : Router) {

    }
    postParams = {
        phone : "",
        password : ""
    };
    error = {
        errPhone : "",
        errPassword : ""
    }
    private validateInput(){
       this.clearError();
       const {phone,password} = this.postParams;
       const errPhone = validmethods.isIegalPhone(phone, warnInfo.errPhone);
       const errPassword = validmethods.isPassword(password, warnInfo.errPassword);
       this.error = {errPhone,errPassword};
       if (errPhone || errPassword) {
           return false;
       };
       return true;
    }
    private clearError(){
        this.error = {
            errPhone : "",
            errPassword : ""
        }
    }
    ngOnInit():void{

    }
    submit():void{
        if(!this.validateInput())return;
        this.SigninService.signin({
            userName:this.postParams.phone,
            pwd:Md5.hashStr(`${this.postParams.password}clerk`)
        }).then(()=>{
            this.router.navigateByUrl('/');
        },()=>{

        })
    }

}
