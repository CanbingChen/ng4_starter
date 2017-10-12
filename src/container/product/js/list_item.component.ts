import {Component, OnInit,Input,Output,EventEmitter} from "@angular/core";
import DEFAULT from "../../../constant/default";
import ProductService from "./product.service";
@Component({
    selector: "list-item",
    templateUrl: "../html/list_item.tpl.html",
    providers: [ProductService],
})
export class ProductListItemComponent {
    public _isEdit = false;
    @Input() set isEdit(isEdit){
        this._isEdit = isEdit;
    };
    @Input() itemObj;
    @Output() remove=new EventEmitter<string>();
    constructor(private ProductService: ProductService) {

    }
     removeItem():void{
         const {id} = this.itemObj;
         const params = {id};
         this.ProductService.removeItem(params).then(()=>{
             this.remove.emit(id);
         });
     }
}
