import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pfpagina',
  templateUrl: './pfpagina.component.html',
  styleUrls: ['./pfpagina.component.scss']
})
export class PfpaginaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('keypress', logKey);

    function logKey(e: { which: any; key: any;}) {
      console.log(e);
    }
  }


}
