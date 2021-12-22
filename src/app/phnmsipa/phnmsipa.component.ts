import {Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { MAPA_PHNMSIPA, PBPACAB1, PF} from '../material/pdas';
import { Phnmsip1Component } from '../phnmsip1/phnmsip1.component';
import { SimulaBackendService } from '../servicios/simula-backend.service';


@Component({
  selector: 'app-phnmsipa',
  templateUrl: './phnmsipa.component.html',
  styleUrls: ['./phnmsipa.component.scss']
})
export class PhnmsipaComponent implements OnInit {
  displayedColumns: string[] = [
    'SEL',
    'ANO',
    'ENTIDAD',
    'RECIBO',
    'SIT',
    'MOD_PAGO',
    'ENT_PAGO',
    'SUC_PAGO',
    'FECHA_DESDE',
    'FECHA_HASTA',
    'TIP_PAGO'];

  // misDatos: Observable<MAPA_PHNMSIPA[]> = of([]);
  listado: MAPA_PHNMSIPA[]=[];

  cabecera: PBPACAB1={
    LINEA_1:'INSS .... Usuario:agafsd',
    LINEA_2:'GISS...... Alta de imapagados y anulados',
    LINEA_3:'----------------------',
    LINEA_4:'Titular .: 1 0202302552F 01 00       Expediente: 1 01 2023 0 00025525 01 00',
    LINEA_5:'Nombre ..: Juan Juan Juan',
    LINEA_8:'PF1 -- PF2 --- PF3 --- PF4 --- PF6 --- PF7 --- PF8 --- INTRO'

  };
  funciones: PF[]=[
    {texto: 'F1', bloqueado: false , info: 'Pulse para mostrar la ayuda',  accion:  () => { return 'PHR01-2' }},
    {texto: 'F2', bloqueado: false },
    {texto: 'F3', bloqueado: false, color: 'accent'},
    {texto: 'F6', bloqueado: true, color: 'primary' },
    {texto: 'F7', bloqueado: false },
    {texto: 'F8', bloqueado: false },
  ]

  constructor(private apiService: SimulaBackendService,
              public dialog: MatDialog,) {
    // this.misDatos = listaService.list();
  }
  openDialog() {
    this.dialog.open(Phnmsip1Component);
  }

  ngOnInit(): void {
    window.addEventListener("keydown", this.openRecibo);

    this.apiService.list().subscribe(datos=>{
      // console.log(datos);
      this.listado = datos;
    },
    error => console.log(error)
    );
  }
   // string[] = ['id', 'name', 'progress', 'fruit'];
   openRecibo(event: KeyboardEvent) {
      switch (event.key) {
        case 'Enter':
            this.openDialog();
            break;
      }
    }

}
