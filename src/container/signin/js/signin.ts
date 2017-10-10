import {Component,OnInit} from "@angular/core";
import { validmethods } from '../../../utils/Validator';
import SigninService from './signin.service';
import '../less/signin.less';
const warnInfo = {
  errPhone: '请输入手机号码',
  errPassword: '请输入正确的密码',
  errLogin: '手机号码或密码错误',
}
@Component({
    selector:'signin',
    templateUrl:'../html/signin.tpl.html',
    providers: [SigninService],
})

export class Signin implements OnInit{
    constructor(private SigninService : SigninService) {

    }
    postParams = {
        phone : '',
        password : ''
    };
    error = {
        errPhone : '',
        errPassword : ''
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
            errPhone : '',
            errPassword : ''
        }
    }
    ngOnInit():void{

    }
    submit():void{
        if(!this.validateInput())return;
        this.SigninService.signin(this.postParams).then(()=>{
            console.log('登录成功')
        },()=>{

        })
    }

}
