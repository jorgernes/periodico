import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { InicioComponent } from './inicio/inicio.component';
import { SepComponent } from './sep/sep.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EfemeridesComponent } from './efemerides/efemerides.component';




@NgModule({
  declarations: [
  
    AppComponent,
    NavComponent,
    FooterComponent,
    GaleriaComponent,
    InicioComponent,
    SepComponent,
    NoticiasComponent,
    EfemeridesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
