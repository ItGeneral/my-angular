/**
 * Created by keven-song on 2017/2/25.
 */

import {Injectable} from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs";

/**
 * 路由守卫
 */
@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private router : Router ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    //请求后台，验证是否有访问某个路径的权限， 返回true则便是有权限访问，返回false则没有
    return true;
  }




}
