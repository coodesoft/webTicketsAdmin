import { Component, OnInit, OnDestroy } from '@angular/core';

import { ZonasService }      from '../../../shared/services/zonas.service';
import { BuscarZona }        from '../../../models/buscar-zona';
import { Zona }              from '../../../models/zona';
import { ModalZonasService } from '../modal-zonas/modal-zonas.service';

@Component({
  selector: 'zonas-form',
  templateUrl: './zonas-form.component.html'
})
export class ZonasFormComponent implements OnInit {

  model:Zona         = new Zona();
  niveles:any        = [{'id':1,'t':'1 - Paises'},{'id':2,'t':'2 - Provincias'},{'id':3,'t':'3 - Ciudades'},{'id':4,'t':'4 - Barrios'},{'id':5,'t':'5 - Zonas'}];
  zonasPadres:any    = [];
  denominaciones:any = [];

  private subModal;
  private subZona;

  constructor(
    private zonas: ZonasService,
    private modal: ModalZonasService
  ) { }

  ngOnInit() {
    this.zonas.getDenominaciones().subscribe((r) => {
      this.denominaciones = r['data'];
    });

    this.subModal = this.modal.showModal.subscribe({
      next: (m) => {
        this.model = <Zona>m;
        console.log(this.model);
        this.updateZonaP();
      }
    });

    this.subZona = this.zonas.zonaCreated.subscribe({
      next: () => {
        this.modal.hide();
      }
    });
  }

  ngOnDestroy(){
    this.subModal.unsubscribe();
    this.subZona.unsubscribe();
  }

  updateZonaP(){
    this.zonas.clearBusqueda();
    let z   = new BuscarZona();
    z.nivel = this.model.nivel-1;
    this.zonas.setBusqueda(z);
    this.zonas.getZonas().subscribe((r) => {
      this.zonasPadres = r['data'];
    });
  }

  guardar(){
    this.zonas.setNewZonaModel(this.model);
    this.zonas.newZona().subscribe((r) => {
      this.modal.hide();
    });
  }

}
