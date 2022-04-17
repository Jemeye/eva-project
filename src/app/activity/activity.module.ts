import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { ReadActivityComponent } from './read-activity/read-activity.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';


@NgModule({
  declarations: [
    ActivityComponent,
    ReadActivityComponent,
    CreateActivityComponent,
    UpdateActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
