/**
 * @Author SongJiuHua
 * Created on 2017/2/21
 * @Description
 */

/**
 * 参数对象
 */
export class Params{

  private _key : string;

  private _value : Object;

  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get value(): Object {
    return this._value;
  }

  set value(value: Object) {
    this._value = value;
  }
}
