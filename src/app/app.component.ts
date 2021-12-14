import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'POC';

  ngOnInit(): void {
    // listado de teclas de funcion
    let pfs = ['F1','F2','F3','F4','F5','F6','F7','F8']

    // no funciona con keypress
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);

    // https://stackoverflow.com/questions/42790602/how-do-i-check-whether-an-array-contains-a-string-in-typescript
    // https://www.itsolutionstuff.com/post/how-to-disable-browser-refresh-button-in-angularexample.html

    function disableF5(e: { which: any; key: any; preventDefault: () => void; }) { //key: any -> keycode: any
    console.log(e);
      // if ((e.which || e.keyCode) == ( 112 || 113 || 114 || 115 || 116 )) e.preventDefault();
      if (pfs.includes(e.key)) e.preventDefault();

    };
  }

}
