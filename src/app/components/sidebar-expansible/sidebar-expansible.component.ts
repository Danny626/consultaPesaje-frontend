import { Component, OnInit } from '@angular/core';

declare var toggleSidebar: any;

@Component({
  selector: 'app-sidebar-expansible',
  templateUrl: './sidebar-expansible.component.html',
  styleUrls: ['./sidebar-expansible.component.scss']
})
export class SidebarExpansibleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new toggleSidebar();
  }

  eventoMostrarOcultarSidebar() {
    new toggleSidebar();
  }

}
