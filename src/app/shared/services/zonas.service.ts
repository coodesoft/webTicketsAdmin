import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';

import { ConfigService } from './config.service';
import { BuscarZona }    from './../../models/buscar-zona';
import { Zona }          from './../../models/zona';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {

  private wsaf  = 'zonas/all';
  private wson  = 'zonas/create';
  private wsdn  = 'zonas/denominacion/all';

  private modelBusqueda = new BuscarZona();
  private modelZonaN    = new Zona();

  public findResult  = new Subject();
  public zonaCreated = new Subject();

  // Denominaciones

  getDenominaciones(){
    return this.http.get(this.config.getAPIUrl()+this.wsdn);
  }

  // busqueda de Zonas
  clearBusqueda(){ this.modelBusqueda = new BuscarZona(); }
  setBusqueda(m) { this.modelBusqueda = m; }
  getMBusqueda() { return this.modelBusqueda; }

  getZonas(){
    return this.http.post(this.config.getAPIUrl()+this.wsaf, this.modelBusqueda);
  }

  // creación de Zonas
  getNewZonaModel() { return this.modelZonaN; }
  setNewZonaModel(m){ this.modelZonaN = m; }

  newZona(){
    return this.http.post(this.config.getAPIUrl()+this.wson, (this.modelZonaN as Zona));
  }

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
  }
}
