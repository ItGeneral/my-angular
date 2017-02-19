/**
 * Created by keven-song on 2017/2/19.
 */
import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

//引用HttpService时，使用构造函数的形式constructor(private httpService: HttpService)，
// 并且providers: [HttpService]，providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例


@Injectable()
export class HttpService{

  private url = "";

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  //错误处理
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  //获取数据
  get():Promise<Object>{
    return this.http.get(this.url, {headers: this.headers})  //http.get返回一个 RxJS 的Observable对象
      .toPromise()  //toPromise操作符把Observable直接转换成Promise对象
      .then(response => response.json().data as Object[]) //在 promise 的then回调中，我们调用 HTTP 的Reponse对象的json方法，以提取出其中的数据。
      .catch(this.handleError);
  }

  //更新数据
  update(obj: Object): Promise<Object>{
    return this.http.put(this.url, JSON.stringify(obj), {headers: this.headers})
      .toPromise()
      .then(() => obj)
      .catch(this.handleError);
  }

  //添加数据
  create(obj: Object): Promise<Object>{
    return this.http.post(this.url, JSON.stringify(obj), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
  }

  //删除数据
  delete(obj: Object):Promise<Object>{
    return this.http.delete(this.url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
