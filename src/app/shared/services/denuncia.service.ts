import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject }    from 'rxjs/Subject';

import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  private wsd  = 'denuncia/nueva';
  private wsa  = 'denuncia/all';

  constructor(
    private http:   HttpClient,
    private config: ConfigService
  ) { }


  getAll(){
    return this.http.get(this.config.getAPIUrl()+this.wsa);
  }
}
