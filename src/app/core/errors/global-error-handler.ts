import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import {
  HttpErrorResponse
} from '@angular/common/http';
import { ErrorDialogService } from 'app/_service/services';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  /* intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    
      return next.handle(request)
          .pipe(
              catchError((error: HttpErrorResponse) => {

                  let errorMessage = '';
                  if (error.error instanceof ErrorEvent) {
                      // client-side error
                      errorMessage = `Error: ${error.error.message}`;
                  } else {
                      // server-side error
                      errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                  }
                  console.log(errorMessage);
                  return throwError(errorMessage);
              })
          ) as Observable<HttpEvent<unknown>>;
  } */

  constructor(
    private errorDialogService: ErrorDialogService,
    private zone: NgZone
  ) {}

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }

    if ( error.name == 'HttpErrorResponse' && error.error.mensaje.includes('JDBC Connection') && error.url.includes('consultaPlaca') ) {
      this.zone.run(() =>
        this.errorDialogService.openDialog(
          'No se pudo conectar con el Recinto seleccionado. Por favor intente nuevamente más tarde'
        )
      );
    } else {
      this.zone.run(() =>
        this.errorDialogService.openDialog(
          error?.message || 'Undefined client error'
        )
      );
    }


    /* console.error('Error from global error handler', error); */
  }
}
