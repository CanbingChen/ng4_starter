import { Routes } from '@angular/router';
import { AppComponent } from "../../page/js/app.component";
import { ProductList } from "../../product/js/list";
import { ProductCreate } from "../../product/js/create";
import { Signin } from "../../signin/js/signin";
export const routes: Routes = [ // Routes类型的数组
  {
    path      : 'index',
    component : ProductList
  },{
    path      : 'create',
    component : ProductCreate
},{
  path      : 'signin',
  component : Signin
},{
    path      : '',
    redirectTo: 'index',
    pathMatch : 'full'
  }
];
