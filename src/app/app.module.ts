import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioContactoComponent } from '../app/formulario-contacto/formulario-contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoService } from './servicios/contacto.service';
import { HabilidadesTecnicasComponent } from './habilidades-tecnicas/habilidades-tecnicas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectosComponent,
    FormularioContactoComponent,
    HabilidadesTecnicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
