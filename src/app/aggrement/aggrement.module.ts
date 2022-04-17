import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AggrementRoutingModule } from './aggrement-routing.module';
import { AggrementComponent } from './aggrement.component';


@NgModule({
  declarations: [
    AggrementComponent
  ],
  imports: [
    CommonModule,
    AggrementRoutingModule
  ]
})
export class AggrementModule { }
