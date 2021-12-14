import { Component, OnInit } from '@angular/core';
import { SimulaBackendService } from '../servicios/simula-backend.service';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent implements OnInit {

  texto: string = ""

  constructor(private servicio: SimulaBackendService) { }

  ngOnInit(): void {
    this.servicio.getAyuda('PHR01-1').subscribe(datos =>{
      this.texto = datos;
    });
  }

}
