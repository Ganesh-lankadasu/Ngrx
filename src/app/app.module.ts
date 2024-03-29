import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule, Store} from '@ngrx/store'
import { reducers } from 'src/app/app.reducers';
import { CommonService } from 'src/app/common.service';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ProductsModule } from './products/products.module';



// const emp={
//   name:'john',
//   country:'america'
// }


const empdaa = {
  name:'saagn',
  country:'india'
}
export const emp =new Object(empdaa)

const data = 'person was from india'
export const person = new InjectionToken(data)


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    ProductsModule

  ],
  providers: [{provide:CommonService,useClass:CommonService},
  {provide:person,useValue:data},
 {provide:emp,useValue:empdaa}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
