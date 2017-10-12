import { Injectable } from "@angular/core";
import Fetch from "../../../utils/fetch";
@Injectable()
export default class SigninService{
    constructor(private fetch: Fetch) {

    }
   signin = this.fetch.request("/api/wx/login/", "POST")
}
