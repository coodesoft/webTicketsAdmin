import { Component, OnInit } from '@angular/core';

import { DenunciaService } from '../../shared/services/denuncia.service';

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.scss']
})
export class DenunciasComponent implements OnInit {

  denuncias:any  = [];

  constructor(
    private denuncia: DenunciaService
  ) { }

  ngOnInit() {
    this.denuncia.getAll().subscribe((r) => {
        this.denuncias = r['data'];
    });
  }

}
