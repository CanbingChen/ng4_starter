import { Routes } from "@angular/router";
import { AppComponent } from "../../page/js/app.component";
import { ProductListComponent } from "../../product/js/list.component";
import { ProductCreateComponent } from "../../product/js/create.component";
import { SigninComponent } from "../../signin/js/signin.component";
const childrenRoutes :Routes =[
  {
    path:'one',
    component:ProductCreateComponent
},
{
  path:'two',
  component:SigninComponent
},
{
  path:'**',
  redirectTo:'one'
}
];
export const routes: Routes = [ // Routes类型的数组
  {
    path      : "",
    component : ProductListComponent
  },{
    path      : "create",
    component : ProductCreateComponent,
    children  : childrenRoutes
},{
  path      : "signin",
  component : SigninComponent
},{
    path      : "ccb",
    redirectTo: "index",
    pathMatch : "full"
  }
];
