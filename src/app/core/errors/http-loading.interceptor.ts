import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingDialogService } from 'app/_service/services';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {

  /* constructor(
    private loader: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loader.show();
    return next.handle(request)
      .pipe( finalize(() => {
        this.loader.hide();
      }) );
  } */

  constructor(
    private loadingDialogService: LoadingDialogService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadingDialogService.openDialog();
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingDialogService.hideDialog();
      })
    ) as Observable<HttpEvent<unknown>>;
  }
}
