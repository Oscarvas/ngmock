import { Component, Input, OnInit } from '@angular/core';
import { PF } from '../material/pdas';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {
  @Input() nombreMapa = 'Nombre de la pantalla';
  @Input() funcionesPF : PF[]= [];

  constructor() {
    this.funcionesPF =[
      {texto: 'F1', bloqueado: false , info: 'Pulse para mostrar la ayuda'},
      {texto: 'F2', bloqueado: false },
      {texto: 'F3', bloqueado: false, color: 'accent'},
      {texto: 'F4', bloqueado: true },
      {texto: 'F5', bloqueado: false },
    ]
  }

  ngOnInit(): void {
  }

}
