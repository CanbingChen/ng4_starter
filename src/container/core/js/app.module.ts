import { AppComponent } from "../../page/js/app.component";
import { ProductListComponent } from "../../product/js/list.component";
import { ProductHeaderComponent } from "../../product/js/list_header.component";
import { ProductCreateComponent } from "../../product/js/create.component";
import { ProductListItemComponent } from "../../product/js/list_item.component";
import { SigninComponent } from "../../signin/js/signin.component";
import {HttpModule} from "@angular/http";
import { Http } from "@angular/http";
import ProductService from "../../product/js/product.service";
import Fetch from "../../../utils/fetch";
import { routes } from "./routes";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import "LESS/main.less";
//@NgModule装饰器用来为模块定义元数据
@NgModule({ // @NgModule 用来定义模块用的装饰器
  declarations: [AppComponent,ProductListComponent,ProductCreateComponent,SigninComponent,ProductHeaderComponent,ProductListItemComponent], // 导入模块所依赖的组件、指令等,用于指定这个模块的视图类
  imports: [
    BrowserModule, //包含了commonModule和applicationModule模块,封装在浏览器平台运行时的一些工具库
    FormsModule,  // 表单相关的组件指令等，包含了[(ngModel)]
    HttpModule,//http服务
    RouterModule.forRoot(routes,{useHash: false}), // RouterModule.forRoot()方法来创建根路由模块
  ], // 导入当前模块所需要的其他模块
  providers:[ProductService,Fetch],//注入服务
  bootstrap: [AppComponent], // 标记出引导组件
  //把这个AppComponent标记为引导 (bootstrap) 组件。当Angular引导应用时，它会在DOM中渲
  //染AppComponent，并把结果放进index.html的元素内部。
})
export class AppModule { }
