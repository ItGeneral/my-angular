/**
 * @Author SongJiuHua
 * Created on 2017/1/23
 * @Description 路由配置
 */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from "./auth.guard";

//loadChildren实现懒加载
//canActive 路由守卫， 如下所示，添加canActivate后，HomeComponent就被设置了访问权限
const appRoutes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'about', loadChildren: './about/about.module#AboutModule'},
  {path:'users', loadChildren: './user/user.module#UserModule'}
];

export const appRouting:ModuleWithProviders  = RouterModule.forRoot(appRoutes);
