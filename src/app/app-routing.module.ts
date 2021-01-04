import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {MainComponent} from "./layouts/core/main/main.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {UserListComponent} from "./components/users/user-list/user-list.component";
import {UserAddComponent} from "./components/users/user-add/user-add.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'admin/dashboard'
  },
  {
    path: 'admin',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UserListComponent
      },
      {
        path: 'users/add',
        component: UserAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
