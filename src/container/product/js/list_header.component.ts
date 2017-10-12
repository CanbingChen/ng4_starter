import {Component, OnInit,Input,Output,EventEmitter} from "@angular/core";
import DEFAULT from "../../../constant/default";
import ProductService from "./product.service";
@Component({
    selector: "product-header",
    templateUrl: "../html/list_header.tpl.html",
    providers: [ProductService],
})
export class ProductHeaderComponent implements OnInit{
    // @Input() set isEdit(isEdit){
    //     this.isEdit = isEdit&&isEdit;
    // }
    public _isEdit = false;
    @Input() set isEdit(isEdit){
        this._isEdit = isEdit;
    }
    @Output() changeEdit=new EventEmitter<boolean>();
    public config = {packageType: 1};
    ngOnInit(): void {

    }
    changeEditState(): void{
        this.changeEdit.emit(!this._isEdit);
    }
}
