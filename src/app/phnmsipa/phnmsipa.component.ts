import {Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { MAPA_PHNMSIPA } from '../material/pdas';
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
