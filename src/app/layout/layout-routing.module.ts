import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent }      from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '',             redirectTo:   'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard',    loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'usuarios' ,    loadChildren: './usuarios/usuarios.module#UsuariosModule' },
            { path: 'denuncias' ,   loadChildren: './denuncias/denuncias.module#DenunciasModule' },
            { path: 'propiedades',  loadChildren: './propiedades/propiedades.module#PropiedadesModule' },
            { path: 'inmobiliarias',loadChildren: './inmobiliarias/inmobiliarias.module#InmobiliariasModule' },
            { path: 'zonas' ,       loadChildren: './zonas/zonas.module#ZonasModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
