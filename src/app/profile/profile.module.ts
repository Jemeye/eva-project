import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '.././shared-module/shared-module.module'
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    CreateProfileComponent,
    ReadProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModuleModule
  ]
})
export class ProfileModule { }
