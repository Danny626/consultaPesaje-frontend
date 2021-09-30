import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  tittle: string;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; level: string; status?: number }
  ) { 
    this.seleccionTitulo(data.level);
  }

  ngOnInit(): void {
  }

  seleccionTitulo(level: string){
    let icono: string;

    if ( level == 'success' ) {
      icono = 'done';
      this.tittle = "Éxito!";
    }

    if ( level == 'info' ) {
      icono = 'info';
      this.tittle = "Info!";
    }

    if ( level == 'warning' ) {
      icono = 'warning';
      this.tittle = "Alerta!";
    }

    if ( level == 'danger' ) {
      icono = 'dangerous';
      this.tittle = "Error!";
    }

  }

}
