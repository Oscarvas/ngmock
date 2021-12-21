import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PF } from '../material/pdas';

@Component({
  selector: 'app-pfpagina',
  templateUrl: './pfpagina.component.html',
  styleUrls: ['./pfpagina.component.scss']
})
export class PfpaginaComponent implements OnInit {
  @Input() funciones: PF[] = [];
  @Output() ayuda = new EventEmitter();
  // funciones: PF[]=[
  //   {texto: 'F1', bloqueado: false , info: 'Pulse para mostrar la ayuda'},
  //   {texto: 'F2', bloqueado: false },
  //   {texto: 'F3', bloqueado: false, color: 'accent'},
  //   {texto: 'F4', bloqueado: true },
  //   {texto: 'F5', bloqueado: false },
  // ]
  hey = function () {
    console.log('clicado!');
  }
  abrirAyuda(){
    this.ayuda.emit();
  }

  selectorEvento(e: string = ''){
    console.log(e);

    if (e.includes('/'))
      this.redirect(e)
    else //if (e.includes('-'))
      this.abrirAyuda()

  }
  constructor(private _snackBar: MatSnackBar,
    private router: Router) {}

  redirect(ruta: string = ''){
    if (ruta)
      this.router.navigate([ruta]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      // horizontalPosition: 'center',
      // verticalPosition: 'top'
    });
  }

  ngOnInit(): void {
    // window.addEventListener('keypress', logKey);

    // function logKey(e: { which: any; key: any;}) {
    //   console.log(e);
    // }

    // listado de teclas de funcion
    let pfs = ['F1','F2','F3','F4','F5','F6','F7','F8']

    // no funciona con keypress
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);

    // https://stackoverflow.com/questions/42790602/how-do-i-check-whether-an-array-contains-a-string-in-typescript
    // https://www.itsolutionstuff.com/post/how-to-disable-browser-refresh-button-in-angularexample.html

    function disableF5(e: { which: any; key: any; preventDefault: () => void; }) { //key: any -> keycode: any
    // console.log(e);
      // if ((e.which || e.keyCode) == ( 112 || 113 || 114 || 115 || 116 )) e.preventDefault();
      if (pfs.includes(e.key)) e.preventDefault();

    };

  }


}
