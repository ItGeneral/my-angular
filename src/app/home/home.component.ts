import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends HttpService implements OnInit {

  private obj : Object[];

  //生命周期钩子  Angular提供了一些接口，用来介入组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时。
  //初始化加载时执行this.get()方法获取数据 http://localhost:8080/user
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.get("http://localhost:8080/user", null).subscribe(function (data) {
      this.obj = data;
      console.log(this.obj)
    })
  }

}
