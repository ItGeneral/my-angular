/**
 * @Author SongJiuHua
 * Created on 2017/1/24
 * @Description
 */

import {UserMainComponent} from './user-main/user-main.component'
import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserLoginComponent} from "./user-login/user-login.component";

export const userRoutes = [
  {
      path : '',
      component: UserMainComponent,
      children : [
        {path : 'register', component: UserRegisterComponent},
        {path : 'login', component: UserLoginComponent}
      ]
  }
];

