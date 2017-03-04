import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {appRouting} from "./app.routing";
import {UserModule} from "./user/user.module";
import {AboutModule} from "./about/about.module";
import {HttpService} from "./service/http.service";
import {AuthGuard} from "./service/auth.guard";
import {HomeModule} from "./home/home.module";


@NgModule({
  declarations: [ //声明本模块中拥有的视图类
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    appRouting,
    HomeModule,
    AboutModule,
    UserModule
  ],//一定要注意HomeModule，AboutModule和UserModule的放置顺序，访问http://localhost:4200/时，如果显示home模块，则必须将HomeModule放在最前面
  bootstrap: [AppComponent], //指定应用的主视图, 它是所有其它视图的宿主
  providers : [HttpService, AuthGuard]  //服务的创建者，并加入到全局服务列表中，可用于应用任何部分
})
export class AppModule {

}
