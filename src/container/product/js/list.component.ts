import {Component, OnInit} from "@angular/core";
import DEFAULT from "../../../constant/default";
import ProductService from "./product.service";
//组件通信 https://github.com/kittencup/angular2-ama-cn/issues/23
@Component({
    selector: "product-list",
    templateUrl: "../html/list.tpl.html",
    providers: [ProductService],
})
export class ProductListComponent implements OnInit{
    public goodsList = [];
    public modal = {};
    public requested = false;
    public modalIsOpen = false;
    public isEdit = false;
    constructor(private ProductService: ProductService) {

    }
    changeEditState(isEdit:boolean){
        this.isEdit = isEdit;
    }
    ngOnInit(): void {
        const count = DEFAULT.count;
        const showed = this.goodsList.length;
        const params = { count, showed };
        this.ProductService.getProductList(params).then((data) => {
            this.goodsList = this.goodsList.concat(data.goodsList);
            this.requested =true;
        },(response) => {

        });
    }
    removeItem(id){

    }
}
