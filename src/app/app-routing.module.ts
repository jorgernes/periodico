import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component'
import { GaleriaComponent } from './galeria/galeria.component'
import { NoticiasComponent } from './noticias/noticias.component'
import { SepComponent } from './sep/sep.component'
import { EfemeridesComponent } from './efemerides/efemerides.component'


const routes: Routes = [
  {
    path: '', // ruta raíz
    component: InicioComponent
  },
  {
    path: 'sep', // se accesa /otra-ruta
    component: SepComponent
  },
  {
    path: 'noticias', // se accesa /otra-ruta
    component: NoticiasComponent
  },
  {
    path: 'galeria', // se accesa /otra-ruta
    component: GaleriaComponent
  },
  {
    path: 'efemerides', // se accesa /otra-ruta
    component: EfemeridesComponent

  }
  
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
