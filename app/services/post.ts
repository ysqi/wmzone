import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions, Response} from 'angular2/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {CONSTANT} from '../utils/constant';

@Injectable()
export class PostService {
    _requestUrl: string = CONSTANT.SERVICE_URL_DEV + 'api/' + CONSTANT.API_VER;

    constructor(private http: Http) { }

    post(apiPath: string, reqBody: any) {
        let me = this;

        let url = me._requestUrl + apiPath;
        console.log(url);
        let body = JSON.stringify(reqBody);
        let headers = new Headers({ 'Content-Type': 'application/json', 'token': 'test' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(url, body, options)
            .map(
                function(res) {
                    let json = res.json();
                    console.log(json);
                    if (!!json.code && json.code > 0) {
                        return json;
                    } else {
                        me.handleError(json.msg);
                    }
                }
            )
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}