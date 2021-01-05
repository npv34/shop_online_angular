import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAddComponent} from "../../components/users/user-add/user-add.component";
import {UserListComponent} from "../../components/users/user-list/user-list.component";
import {UserEditComponent} from "../../components/users/user-edit/user-edit.component";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'add',
    component: UserAddComponent
  }
]

@NgModule({
  declarations: [
    UserAddComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserModule { }
