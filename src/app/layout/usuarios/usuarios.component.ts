import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios:any = [];

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
    this.user.getAll().subscribe((r) => {
        this.usuarios = r['data'];
    });
  }

}
