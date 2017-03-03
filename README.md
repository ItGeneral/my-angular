# MyAngular
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

##运行流程
（1）代码pull下来后，先安装angular2，执行命令：`npm install`；看到项目中有`node_modules`文件后，说明就安装成功了  
（2）安装完成后，运行项目：`ng serve`  
（3）访问`http://localhost:4200/`浏览页面  


## 功能进度

### 导航路由
路由配置请参考app.routing.ts文件；  
在html文件中必须有`<a routerLink="路径" routerLinkActive="active">首页</a>` 以及 `<router-outlet></router-outlet>`内容，路由才能生效，具体请参考app.component.html文件。  
`路由守卫服务`：auth.guard.ts，可以根据功能需求设置访问某个路径的权限；  
`路由守卫使用方式`：请参见app.routing.ts中的`{path:'home', component: HomeComponent, canActivate:[AuthGuard]}`

### http请求
http服务类请参考http.service.ts，所有需要使用http请求的模块，只要继承HttpService就可以直接调用里面的方法；  
前后端分离，进行请求时涉及到跨域请求，需要在后端设置response的header `response.setHeader("Access-Control-Allow-Origin", "*")`；  
使用方式请参考home.component.ts文件。

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
