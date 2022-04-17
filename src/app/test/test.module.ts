import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { DoTestComponent } from './do-test/do-test.component';
import { ResultComponent } from './result/result.component';
import { ViewTestComponent } from './view-test/view-test.component';


@NgModule({
  declarations: [
    TestComponent,
    DoTestComponent,
    ResultComponent,
    ViewTestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
