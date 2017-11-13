import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
//ActivatedRoute为获取路由参数服务
@Component({
  selector   : "product-create",
  templateUrl: "../html/create.tpl.html"
})
export class ProductCreateComponent {
    constructor(private route:ActivatedRoute){
        route.queryParamMap.forEach(p => {
            console.log(p)
        });
        // const url: Observable<string> = route.url.map(segments => segments.join(''));
        console.log('******');
        // console.log(route.children);
        console.log(route.url);
    }
}
