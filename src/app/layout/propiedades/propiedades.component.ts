import { Component, OnInit } from '@angular/core';

import { PropiedadesService } from './../../shared/services/propiedades.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {

  propiedades:any = [];

  constructor(
    private prop: PropiedadesService,
  ) { }

  ngOnInit() {
    this.prop.getSearch().subscribe((r) => {
        this.propiedades = r['data'];
    });
  }

}
