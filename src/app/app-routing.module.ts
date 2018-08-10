import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component'
import { GaleriaComponent } from './galeria/galeria.component'
import { NoticiasComponent } from './noticias/noticias.component'
import { SepComponent } from './sep/sep.component'
import { EfemeridesComponent } from './efemerides/efemerides.component'


const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'sep', 
    component: SepComponent
  },
  {
    path: 'noticias',
    component: NoticiasComponent
  },
  {
    path: 'galeria', 
    component: GaleriaComponent
  },
  {
    path: 'efemerides', 
    component: EfemeridesComponent

  }
  
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
