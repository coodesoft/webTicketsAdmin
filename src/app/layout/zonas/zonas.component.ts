import { Component, OnInit } from '@angular/core';

import { ZonasService }      from '../../shared/services/zonas.service';
import { ModalZonasService } from './modal-zonas/modal-zonas.service';
import { Zona }              from '../../models/zona';
import { BuscarZona }        from '../../models/buscar-zona';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.scss']
})
export class ZonasComponent implements OnInit {

  zonas:any          = [[],[],[],[],[]];
  pestania:number    = 1;
  denominaciones:any = [];

  constructor(
    private zona:  ZonasService,
    private modal: ModalZonasService
  ) { }

  ngOnInit() {
    for (let c=1; c<6; c++){
      this.busquedaZona(c);
    }

    this.zona.getDenominaciones().subscribe((r) => {
        this.denominaciones = r['data'];
    });
  }

  cargarPestania(n){
    this.pestania = n;
    this.busquedaZona(this.pestania);
  }

  busquedaZona(n){
    this.zona.clearBusqueda();
    let z   = new BuscarZona();
    z.nivel = n;
    this.zona.setBusqueda(z);
    this.zona.getZonas().subscribe((r) => {
      this.zonas[n-1] = r['data'];
    });
  }

  newZona(i,r){
    let z   = new Zona();
    z.root = new Zona();
    z.nivel = i;
    z.root = r;
    if(r!=null){z.root_id = r.id;}
    this.modal.show(z);
  }

  newDenominacion(){

  }

  editZona(r){
    this.modal.show(r);
  }

  borrar(r){

  }

}
