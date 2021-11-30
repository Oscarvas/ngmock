import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAPA_PHNMAILA, PBPACAB1 } from '../phnmalia/mapa-phnmalia';
import { PhnmsipaComponent } from '../phnmsipa/phnmsipa.component';
import { PfpaginaComponent } from '../pfpagina/pfpagina.component';

@Component({
  selector: 'app-phnmali1',
  templateUrl: './phnmali1.component.html',
  styleUrls: ['./phnmali1.component.scss']
})
export class Phnmali1Component implements OnInit {
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

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(PhnmsipaComponent);
  }
  abreAyuda() {
    console.log(KeyboardEvent)
    // if KeyboardEvent.arguments(k) == '?'
    this.dialog.open(PfpaginaComponent);
  }
}
