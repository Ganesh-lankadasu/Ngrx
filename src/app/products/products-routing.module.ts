import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { EditproductsComponent } from './editproducts/editproducts.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path:'editproducts',component:EditproductsComponent,data:{title:'',price:'',brand:'',category:''}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
