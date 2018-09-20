import { Component, OnInit } from '@angular/core';

import { InmobiliariasService } from './../../shared/services/inmobiliarias.service';

@Component({
  selector: 'app-inmobiliarias',
  templateUrl: './inmobiliarias.component.html',
  styleUrls: ['./inmobiliarias.component.scss']
})
export class InmobiliariasComponent implements OnInit {

  inmobiliarias:any = [];

  constructor(
    private imb: InmobiliariasService,
  ) { }

  ngOnInit() {
    this.imb.getAll().subscribe((r) => {
        this.inmobiliarias = r['data'];
    });
  }

}
