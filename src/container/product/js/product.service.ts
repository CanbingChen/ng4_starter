import { Injectable } from "@angular/core";
import Fetch from "../../../utils/fetch";
@Injectable()
export default class ProductService{
    constructor(private fetch: Fetch) {

    }
   getProductList = this.fetch.request("/api/wx/googs_list", "POST");
   removeItem= this.fetch.request('/api/wx/delete_goods', 'POST');
   getPackageList= this.fetch.request('/api/wx/package_list', 'GET');
   addProduct= this.fetch.request('/api/wx/googs_save', 'POST');
   getProductType= this.fetch.request('/api/wx/find_type', 'GET');
}
