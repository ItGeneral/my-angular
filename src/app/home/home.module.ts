import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {homeRoutes} from "./home.route";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [ //声明本模块中拥有的视图类
    HomeComponent,
  ],
  bootstrap: [HomeComponent], //指定应用的主视图, 它是所有其它视图的宿主
})
export class HomeModule {

}
