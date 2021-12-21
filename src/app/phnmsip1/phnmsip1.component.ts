import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MAPA_PHNMSIP1 } from '../material/pdas';
import { SimulaBackendService } from '../servicios/simula-backend.service';

@Component({
  selector: 'app-phnmsip1',
  templateUrl: './phnmsip1.component.html',
  styleUrls: ['./phnmsip1.component.scss']
})
export class Phnmsip1Component implements OnInit {
  // @Input() detalle!: MAPA_PHNMSIP1;
  detalle!: MAPA_PHNMSIP1;

  constructor(@Inject(MAT_DIALOG_DATA) public id: string, private apiService: SimulaBackendService) {
    // console.log(data);
    this.apiService.getDetalle(id).subscribe(datos=>{
      // console.log(datos);
      this.detalle = datos;
    },
    error => console.log(error)
    );
  }

  // constructor(private apiService: SimulaBackendService) { }

  ngOnInit(): void {
    // this.apiService.getDetalle().subscribe(datos=>{
    //   // console.log(datos);
    //   this.detalle = datos;
    // },
    // error => console.log(error)
    // );
  }

}
