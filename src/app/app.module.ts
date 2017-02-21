import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {appRouting} from "./app.routing";
import {UserModule} from "./user/user.module";
import {AboutModule} from "./about/about.module";
import {HttpService} from "./http.service";


@NgModule({
  declarations: [ //声明本模块中拥有的视图类
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    appRouting,
    UserModule,
    AboutModule
  ],
  bootstrap: [AppComponent], //指定应用的主视图, 它是所有其它视图的宿主
  providers : [HttpService]  //服务的创建者，并加入到全局服务列表中，可用于应用任何部分
})
export class AppModule {

}
