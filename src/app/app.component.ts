///<reference path="../../node_modules/@angular/common/src/directives/ng_class.d.ts"/>
import {Component,OnInit } from '@angular/core';
import {NgClass} from '@angular/common';
import {HttpService} from "./http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NgClass]
})
export class AppComponent extends HttpService implements OnInit{

  //生命周期钩子  Angular提供了一些接口，用来介入组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时。
  //初始化加载时执行this.get()方法获取数据
  ngOnInit(): void {
    //this.get();
    console.log("----1----")
  }

  isOn = true;
  isDisabled = false;
  toggleNav(newState){
    if (!this.isDisabled) {
      this.isOn = newState;
    }
  }
}
