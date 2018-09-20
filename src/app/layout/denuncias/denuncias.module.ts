import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { DenunciasRoutingModule } from './denuncias-routing.module';
import { DenunciasComponent }     from './denuncias.component';

@NgModule({
    imports: [CommonModule, DenunciasRoutingModule],
    declarations: [DenunciasComponent]
})
export class DenunciasModule {}
