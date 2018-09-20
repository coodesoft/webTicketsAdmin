import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { ZonasRoutingModule } from './zonas-routing.module';
import { ZonasComponent }     from './zonas.component';

import { ModalZonasService }  from './modal-zonas/modal-zonas.service';

import { ModalZonasComponent } from './modal-zonas/modal-zonas.component';
import { ZonasFormComponent }  from './zonas-form/zonas-form.component';

@NgModule({
    imports: [CommonModule, ZonasRoutingModule, FormsModule],
    declarations: [ZonasComponent, ModalZonasComponent, ZonasFormComponent],
    providers: [ModalZonasService]
})
export class ZonasModule {}
