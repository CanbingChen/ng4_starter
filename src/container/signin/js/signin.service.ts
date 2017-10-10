import { Injectable } from '@angular/core';
import Fetch from '../../../components/helpers/fetch';
@Injectable()
export default class SigninService{
    constructor(private fetch: Fetch) {

    }
   signin = this.fetch.request('/api/wx/login/', 'POST')
}
