import { Component, OnInit } from '@angular/core';
import { MAPA_PHNMSIP1 } from '../material/pdas';
import { SimulaBackendService } from '../servicios/simula-backend.service';

@Component({
  selector: 'app-phnmsip1',
  templateUrl: './phnmsip1.component.html',
  styleUrls: ['./phnmsip1.component.scss']
})
export class Phnmsip1Component implements OnInit {
  detalle!: MAPA_PHNMSIP1;

  constructor(private apiService: SimulaBackendService) { }

  ngOnInit(): void {
    this.apiService.getDetalle().subscribe(datos=>{
      // console.log(datos);
      this.detalle = datos;
    },
    error => console.log(error)
    );
  }

}
