import { Component, Input, OnInit } from '@angular/core';
import { PF } from '../material/pdas';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss']
})
export class CuerpoComponent implements OnInit {
  @Input() mapa = 'Nombre de la pantalla';
  @Input() contenido = `Nisi do consequat esse cupidatat proident id fugiat consectetur fugiat elit cillum est. Incididunt mollit voluptate occaecat qui sit. Dolor ea reprehenderit do culpa amet proident. Duis ex Lorem proident est in qui Lorem anim adipisicing non id. Non esse quis velit quis mollit ullamco eiusmod sint incididunt id amet Lorem. Reprehenderit exercitation aute ad minim non ullamco deserunt cupidatat officia dolore non laborum et tempor. Tempor nulla eu ipsum tempor voluptate aliquip exercitation in sint.

Veniam tempor voluptate voluptate non ut deserunt dolore magna irure est laborum. Dolore nostrud quis officia quis dolore excepteur occaecat labore culpa fugiat commodo sunt consectetur ea. Do ut Lorem adipisicing proident culpa. Sit ipsum aliquip nulla incididunt anim exercitation mollit veniam aliquip. Fugiat mollit deserunt sint incididunt. Cupidatat elit fugiat quis est nulla quis quis ex nulla proident non occaecat culpa.

Lorem id cillum reprehenderit anim. Elit esse proident mollit aliqua dolore eiusmod irure. Aliqua cillum proident velit ut quis voluptate. Sint esse sint mollit aute irure enim dolor labore enim ea est proident non irure. Labore tempor adipisicing excepteur mollit ad cillum ad aliqua fugiat consectetur.

Dolor ullamconisi dolor id ut non ut. Officia laboris laborum sunt nostrud est est esse ex aute cupidatat ut ipsum ex aute. Anim fugiat sunt aliqua aute nulla anim tempor fugiat id sit qui eiusmod.`;
  @Input() pie : PF[]= [];

  constructor() {
    this.pie =[
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
