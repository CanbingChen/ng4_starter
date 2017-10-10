import { Injectable } from '@angular/core';
import Fetch from '../../../components/helpers/fetch'
@Injectable()
export default class ProductService{
    constructor(private fetch: Fetch) {

    }
   getProductList = this.fetch.request('/api/wx/googs_list', 'POST')
}
