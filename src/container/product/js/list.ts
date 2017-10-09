import {Component,OnInit} from "@angular/core";
import ProductService from './product.service';
import '../less/product.less'
@Component({
    selector:'product-list',
    templateUrl:'../html/list.tpl.html',
})
export class ProductList implements OnInit{
    constructor(private ProductService: ProductService) {

    }
    title = '我是产品经理';
    ngOnInit():void{
        console.log('ssssssssssssss');
        this.ProductService.getProductList({});
    }
}
