import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Cabecera } from '../material/pdas';
import { SimulaBackendService } from '../servicios/simula-backend.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit, OnDestroy {
  rxTime = new Date();
  subscription: Subscription = new Subscription;
  cabecera: Cabecera = {
    entidad: '',
    usuario: ''
  };

  constructor(private servicio: SimulaBackendService) { }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    // Using RxJS Timer
    this.subscription = timer(0, 1000)
    .pipe(
      map(() => new Date()),
      share()
    )
    .subscribe(time => {
      this.rxTime = time;
    });

  this.servicio.getCabecera().subscribe(datos =>{
    this.cabecera = datos;
  });
  }

}
