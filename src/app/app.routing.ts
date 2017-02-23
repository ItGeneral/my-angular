/**
 * @Author SongJiuHua
 * Created on 2017/1/23
 * @Description 路由配置
 */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', loadChildren: './about/about.module#AboutModule'},
  {path:'users', loadChildren: './user/user.module#UserModule'}
];

export const appRouting:ModuleWithProviders  = RouterModule.forRoot(appRoutes);
