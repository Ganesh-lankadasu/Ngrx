import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsRoutingModule } from './basics-routing.module';
import { BasicsComponent } from './basics.component';
import { BasicschildComponent } from './basicschild/basicschild.component';


@NgModule({
  declarations: [
    BasicsComponent,
    BasicschildComponent
  ],
  imports: [
    CommonModule,
    BasicsRoutingModule
  ]
})
export class BasicsModule { }
