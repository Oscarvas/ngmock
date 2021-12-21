import { Component, Input, OnInit } from '@angular/core';
import { SimulaBackendService } from '../servicios/simula-backend.service';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.scss']
})
export class AyudaComponent implements OnInit {
  @Input() mapa = '';
  @Input() aplicacion = '';

  texto: string = ""

  constructor(private servicio: SimulaBackendService) { }

  ngOnInit(): void {
    this.servicio.getAyuda(this.mapa).subscribe(datos =>{ //'PHR01-1'
      this.texto = datos;
    });
  }

}
