import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { Pesaje } from 'app/_model/pesaje';
import { Recinto } from 'app/_model/recinto';

import { 
  RecintoService, 
  ConsultaPesajeService,
  LoginService
} from 'app/_service/services';

declare var $: any;

@Component({
  selector: 'app-pesajes',
  templateUrl: './pesajes.component.html',
  styleUrls: ['./pesajes.component.scss']
})
export class PesajesComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  
  /* placa: string = '';
  fechaInicialSelec: Date = new Date();
  fechaFinalSelec: Date = new Date(); */
  recintos: Recinto[] = []
  recintoSelec: Recinto;
  pesajes: Pesaje[] = [];

  recintoNombre: string;

  displayedColumns: string[] = ['placa', 'pesoBruto', 'pesoNeto', 'pesoTara', 'operacion', 'fechaBlz', 'recintoCod'];
  dataSourcePesajes = new MatTableDataSource<Pesaje>(this.pesajes);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSourcePesajes.paginator = this.paginator;
  }

  constructor(
    private recintoService: RecintoService,
    private consultaPesajeService: ConsultaPesajeService,
    private datepipe: DatePipe,
    private loginService: LoginService
  ) { 
    this.form = new FormGroup({
      'placa': new FormControl('', [Validators.required]),
      'fechaInicial': new FormControl('', [Validators.required]),
      'fechaFinal': new FormControl(''),
      'recinto': new FormControl(sessionStorage.getItem('recintoCod'), [Validators.required])
    });
  }

  ngOnInit(): void {
    /* this.listarRecintos(); */
    this.recintoNombre = this.loginService.getNombreRecintoActivo();
  }

  listarRecintos() {
    this.recintoService.listarRecintos()
      .subscribe(recintos => this.recintos = recintos);
  }

  buscarPesajes() {
    //const recintoObj: Recinto = this.form.value['recinto'];
    const recintoCod = this.form.value['recinto'];;
    const placa: string = this.form.value['placa'];
    const fechaInicial: string = this.datepipe.transform(this.form.value['fechaInicial'], 'dd-MM-yyyy');
    const fechaFinal: string = this.datepipe.transform(this.form.value['fechaInicial'], 'dd-MM-yyyy');

    this.consultaPesajeService.buscarPesajes(placa, fechaInicial, fechaFinal, recintoCod)
      .subscribe(resp => {
        this.dataSourcePesajes.data = resp;
        // this.showNotification('bottom', 'center', 'success', 'Pesajes obtenidos correctamente.')
      });
  }



  showNotification(from, align, level, message){
    let icono: string;

    if ( level == 'success' ) {
      icono = 'done'
    }

    if ( level == 'info' ) {
      icono = 'info'
    }

    if ( level == 'warning' ) {
      icono = 'warning'
    }

    if ( level == 'danger' ) {
      icono = 'dangerous'
    }

    $.notify({
        icon: icono,
        message: message

    },{
        type: level,
        timer: 4000,
        placement: {
            from: from,
            align: align
        },
        template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
          '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
          '<i class="material-icons" data-notify="icon">notifications</i> ' +
          '<span data-notify="title">{1}</span> ' +
          '<span data-notify="message">{2}</span>' +
          '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
          '</div>' +
          '<a href="{3}" target="{4}" data-notify="url"></a>' +
        '</div>'
    });
}

}
