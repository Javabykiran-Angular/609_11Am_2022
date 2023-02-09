import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';

const routes: Routes = [
  {
    path:"",component:ListuserComponent
  },
  {
    path:"adduser",component:AdduserComponent
  },
  {
    path:"updateuser",component:UpdateuserComponent
  },
  {
    path:"deleteuser",component:DeleteuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
