import { Component, OnInit } from '@angular/core';
import {HttpService} from "../service/http.service";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[NgModel]
})
export class HomeComponent implements OnInit {

  constructor(public httpService : HttpService){}

  public obj : Array<Object>;

  public target : string;

  //生命周期钩子  Angular提供了一些接口，用来介入组件生命周期的几个关键时间点：刚创建时、每次变化时，以及最终被销毁时。
  //初始化加载时执行this.get()方法获取数据 http://localhost:8080/user
  ngOnInit(): void {
    //this.testHttp();
    this.obj = [1,2,3,4,5,7,8,8,9,9,4,4,4,4];
  }

  testHttp(){
    //subscribe()订阅数据
    this.httpService.get("http://localhost:8080/test", null).subscribe(data => {
      this.obj = data;
      //console.log(this.obj)
    });
  }

  search(){
    console.log(this.target);
  }


}
