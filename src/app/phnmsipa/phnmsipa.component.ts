import {Component, OnInit } from '@angular/core';
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

    misDatos = this.simula.getListadoSIPA();

  constructor(private simula: SimulaBackendService) { }

  ngOnInit(): void {
  }
   // string[] = ['id', 'name', 'progress', 'fruit'];


}
