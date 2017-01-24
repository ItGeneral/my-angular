import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {userRoutes} from './user.routing';
import {UserMainComponent} from "./user-main/user-main.component";
import {RouterModule} from "@angular/router";
import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserLoginComponent} from "./user-login/user-login.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserMainComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  exports:[UserMainComponent]
})
export class UserModule { }
