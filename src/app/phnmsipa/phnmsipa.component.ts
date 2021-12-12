import {Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MAPA_PHNMSIPA } from '../material/pdas';
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

  constructor(private listaService: SimulaBackendService) {
    // this.misDatos = listaService.list();
  }

  ngOnInit(): void {
    this.listaService.list().subscribe(datos=>{
      // console.log(datos);
      this.listado = datos;
    },
    error => console.log(error)
    );
  }
   // string[] = ['id', 'name', 'progress', 'fruit'];


}
