import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InmobiliariasComponent }    from './inmobiliarias.component';

const routes: Routes = [
    { path: '', component: InmobiliariasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InmobiliariasRoutingModule {

}
