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
    let mensaje: string;

    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      // error = error.rejection; // get the error object
      mensaje = error?.message || 'Undefined client error';
      this.sendError(mensaje);

    } else {
      if ( error.error.error_description?.includes('Bad credentials') ) {
        mensaje = 'Datos de acceso incorrectos.';
      }

      else if ( error.name == 'HttpErrorResponse' && error.error.mensaje?.includes('JDBC Connection') && error.url?.includes('consultaPlaca') ) {
        mensaje = 'No se pudo conectar con el Recinto seleccionado. Por favor intente nuevamente más tarde.';
      }

      else if (error.status == 500) {
        mensaje = error?.message || 'Undefined server error';
      }
      
      else if (error.status == 0) {
        mensaje = 'Error al conectarse con el servidor. Por favor contactar con el departamento de sistemas.';
      }

      else if ( error.status == 400 && error.error.mensaje?.includes('ERROR: duplicate') ) {
        const mensajeError = error.error.mensaje;
        
        if ( mensajeError?.includes('correo') ) {
          mensaje = 'El correo electrónico ya se encuentra registrado, por favor ingrese otro.';
        }

      }

      else if ( error.status == 409 && error.error.mensaje?.includes('usuario ya existe') ) {
          mensaje = 'El usuario ya se encuentra registrado, por favor ingrese otro.';
      }

      else if ( error.error.mensaje?.includes('Connection is not available') ) {
        mensaje = 'No se pudo conectar con el Recinto seleccionado. Por favor intente nuevamente más tarde.';
      }

      this.sendError(mensaje);
    }


    /* console.error('Error from global error handler', error); */
  }

  sendError(error: string) {
    this.zone.run(() =>
      this.errorDialogService.openDialog(
        error || 'Undefined client error.'
      )
    ); 
  }

}
