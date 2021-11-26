import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Phnmali1Component } from './phnmali1/phnmali1.component';
import { PhnmsipaComponent } from './phnmsipa/phnmsipa.component';
import { PhnmaliaComponent,Phnmsip1 } from './phnmalia/phnmalia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PfpaginaComponent } from './pfpagina/pfpagina.component';

@NgModule({
  declarations: [
    AppComponent,
    Phnmali1Component,
    PhnmsipaComponent,
    PhnmaliaComponent,
    CabeceraComponent,
    PfpaginaComponent,
    Phnmsip1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
