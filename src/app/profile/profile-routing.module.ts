import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileComponent } from './profile.component';
import { ReadProfileComponent } from './read-profile/read-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: 'read',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateProfileComponent
      },
      {
        path: 'read',
        component: ReadProfileComponent
      },
      {
        path: 'update',
        component: UpdateProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
