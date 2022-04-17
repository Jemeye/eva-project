import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';
import { CreateSchoolComponent } from './create-school/create-school.component';
import { UpdateSchoolComponent } from './update-school/update-school.component';
import { ReadSchoolComponent } from './read-school/read-school.component';


@NgModule({
  declarations: [
    SchoolComponent,
    CreateSchoolComponent,
    UpdateSchoolComponent,
    ReadSchoolComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule
  ]
})
export class SchoolModule { }
