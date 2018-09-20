import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariasService {

  private wsia = 'inmobiliaria/getAll';

  getAll(){
    return this.http.get(this.config.getAPIUrl()+this.wsia);
  }

  constructor(
    private http:   HttpClient,
    private config: ConfigService
  ) { }
}
