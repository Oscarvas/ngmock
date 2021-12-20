import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAPA_PHNMAILA, PBPACAB1, PF } from '../material/pdas';
import { PfpaginaComponent } from '../pfpagina/pfpagina.component';
import { CabeceraComponent } from '../cabecera/cabecera.component';

@Component({
  selector: 'app-phnmali1',
  templateUrl: './phnmali1.component.html',
  styleUrls: ['./phnmali1.component.scss']
})
export class Phnmali1Component implements OnInit {

  funciones: PF[]=[
    {texto: 'F1', bloqueado: false , info: 'Pulse para mostrar la ayuda'},
    {texto: 'F2', bloqueado: false },
    {texto: 'F3', bloqueado: false, color: 'accent'},
    {texto: 'F4', bloqueado: true },
    {texto: 'F5', bloqueado: false },
  ]

  cabecera: PBPACAB1 = {
    LINEA_1: 'I.N.S.S. USUARIO: OSCAR VASQUEZ SILSSSP PHNALI1 FECHA',
    LINEA_2: 'G.I.S.S.  Alta de impagados y anulados PHNALI1 HORA',
    LINEA_3: '-------------',
  }
  cuerpo: MAPA_PHNMAILA = {
    DESIPF: 'string',
    DUPIF: 'string',
    NUMIPF: 'string',
    TIPOIPF: 'string',
    AEXP: 'string',
    CEXP: 'string',
    DEEXP: 'string',
    DUEXP: 'string',
    NEXP: 'string',
    PEXP: 'string',
    TEXP: 'string',
  }


  constructor(public dialog: MatDialog) { }

  ngOnInit(){

  }

  openDialog() {
    this.dialog.open(CabeceraComponent);
  }
  abreAyuda() {
    console.log(KeyboardEvent)
    // if KeyboardEvent.arguments(k) == '?'
    this.dialog.open(PfpaginaComponent);
  }
}
