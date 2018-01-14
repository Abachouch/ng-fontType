import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ColorsService {

  public apiHost = './assets/htmlc.json';

  constructor(private http: Http) { }
  public getHtmlColors(): Promise<Object> {
    return this.http.get(this.apiHost)
      .toPromise()
      .then((response) => {
        return response.json();
      }).catch((err) => {
        console.log(err);
      });
  }

}
