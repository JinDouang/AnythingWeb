import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {

  constructor() {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /* Switch url using server url api when not in local file */
    if (!req.url.includes('assets')) {
      const apiReq = req.clone({ url: `${environment.context.urlApi}/${req.url}`});
      return next.handle(apiReq);
    }

    return next.handle(req);
  }
}
