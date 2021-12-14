import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MAPA_PHNMAILA,PBPACAB1 } from '../material/pdas';
import { Phnmsip1Component } from '../phnmsip1/phnmsip1.component';

@Component({
  selector: 'app-phnmalia',
  templateUrl: './phnmalia.component.html',
  styleUrls: ['./phnmalia.component.scss']
})
export class PhnmaliaComponent implements OnInit {

  cabecera: PBPACAB1 = {
    LINEA_1: 'I.N.S.S. USUARIO: OSCAR VASQUEZ SILSSSP PHNALIA FECHA',
    LINEA_2: 'G.I.S.S.  Alta de impagados y anulados PHNALIA HORA',
    LINEA_3: '-------------',
  }
  cuerpo: MAPA_PHNMAILA = {
    DESIPF: 'string',
    DUPIF: 'string',
    NUMIPF: '00019174S',
    TIPOIPF: 'string',
    AEXP: 'string',
    CEXP: 'string',
    DEEXP: 'string',
    DUEXP: 'string',
    NEXP: 'string',
    PEXP: 'string',
    TEXP: 'string',
  }

  constructor(public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute) { }

  openDialog() {
    this.dialog.open(Phnmsip1Component);
  }
  ngOnInit(): void {
    // window.addEventListener("keydown", this.miEvento);
  }
  onKeyDownEvent(event: KeyboardEvent) {
    if (event.key == 'F2')
      this.router.navigate(['PHNNSIPA'], { relativeTo: this.route });
  }
  // https://www.htmlgoodies.com/javascript/implement-keyboard-navigation-on-custom-angular-controls/
  miEvento(event: KeyboardEvent) {
    switch (event.key) {
      case 'F1':
        console.log('hey');
        break;
      case 'Enter':
          this.router.navigate(['PHNNSIPA'], { relativeTo: this.route });
          break;
    }

  }
}
