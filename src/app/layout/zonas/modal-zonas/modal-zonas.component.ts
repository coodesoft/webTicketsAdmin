import { Component, OnInit, OnDestroy } from '@angular/core';

import { ModalZonasService } from './modal-zonas.service';

@Component({
  selector: 'zonas-modal',
  templateUrl: './modal-zonas.component.html',
  styleUrls: ['./modal-zonas.scss']
})
export class ModalZonasComponent implements OnInit {

  showM = false;

  private subShow;
  private subHide;

  constructor(
    private modal: ModalZonasService
  ) {}


  ngOnInit() {
    this.subShow = this.modal.showModal.subscribe({  next: () => { this.show(); } });
    this.subHide = this.modal.hideModal.subscribe({  next: () => { this.hide(); } });
  }

  ngOnDestroy(){
    this.subShow.unsubscribe();
    this.subHide.unsubscribe();
  }

  show(){
    this.showM = true;
  }

  hide(){
    this.showM = false;
  }

}
