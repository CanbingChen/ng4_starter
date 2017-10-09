import { Injectable } from '@angular/core';
import Fetch from '../../../components/helpers/fetch'
@Injectable()
export default class ProductService extends Fetch{
    getProductList= this.fetch('/api/wx/googs_list', 'POST')
}
