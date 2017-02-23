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


  ngOnInit(): void {

  }


  isOn = true;
  isDisabled = false;
  toggleNav(newState){
    if (!this.isDisabled) {
      this.isOn = newState;
    }
  }
}
