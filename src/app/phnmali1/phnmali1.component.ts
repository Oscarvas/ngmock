import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAPA_PHNMAILA, PBPACAB1 } from '../material/pdas';
import { PhnmsipaComponent } from '../phnmsipa/phnmsipa.component';
import { PfpaginaComponent } from '../pfpagina/pfpagina.component';
import { CabeceraComponent } from '../cabecera/cabecera.component';

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

  ngOnInit(){
    // listado de teclas de funcion
    let pfs = ['F1','F2','F3','F4','F5','F6']

    // no funciona con keypress
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);

    // https://stackoverflow.com/questions/42790602/how-do-i-check-whether-an-array-contains-a-string-in-typescript
    // https://www.itsolutionstuff.com/post/how-to-disable-browser-refresh-button-in-angularexample.html

   function disableF5(e: { which: any; key: any; preventDefault: () => void; }) { //key: any -> keycode: any
    console.log(e);
      // if ((e.which || e.keyCode) == ( 112 || 113 || 114 || 115 || 116 )) e.preventDefault();
      if (pfs.includes(e.key)) e.preventDefault();

   };

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
