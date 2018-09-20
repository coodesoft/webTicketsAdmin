import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropiedadesComponent }    from './propiedades.component';

const routes: Routes = [
    { path: '', component: PropiedadesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PropiedadesRoutingModule {

}
