import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'basics', loadChildren: () => import('./basics/basics.module').then(m => m.BasicsModule) },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
