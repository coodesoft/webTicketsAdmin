import { Injectable }      from '@angular/core';
import { Observable }      from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Zona } from './../../../models/zona';
@Injectable({
  providedIn: 'root'
})
export class ModalZonasService {
  public showModal = new BehaviorSubject<any>(new Zona());
  public hideModal = new BehaviorSubject<boolean>(true);

  constructor() {}

  show(m){
    this.showModal.next(m);
  }

  hide(){
    this.hideModal.next(true);
  }
}
