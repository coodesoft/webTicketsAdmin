import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmobiliariasRoutingModule } from './inmobiliarias-routing.module';
import { InmobiliariasComponent }     from './inmobiliarias.component';

@NgModule({
    imports: [CommonModule, InmobiliariasRoutingModule],
    declarations: [InmobiliariasComponent]
})
export class InmobiliariasModule {

}
