import {Injectable} from "@angular/core";

@Injectable()
export class CommonUtil {

  constructor() {
  }

  getDeepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

}
