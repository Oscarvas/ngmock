import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Phnmali1Component } from './phnmali1/phnmali1.component';
import { PhnmaliaComponent } from './phnmalia/phnmalia.component';
import { PhnmsipaComponent } from './phnmsipa/phnmsipa.component';

const routes: Routes = [
  { path: 'dev', component: CuerpoComponent},
  { path: 'PHR01', component: PhnmaliaComponent,
    // children:[
    //   {path: 'PHNNSIPA', component: PhnmsipaComponent}
    // ]
  },
  { path: 'PHR02', component: Phnmali1Component ,
    // children:[
    //   {path: 'PHNNSIPA', component: PhnmsipaComponent}
    // ]
  },
  {path: 'PHR01/PHNNSIPA', component: PhnmsipaComponent},
  {path: 'PHR02/PHNNSIPA', component: PhnmsipaComponent},
  { path: 'TEST', component: PhnmsipaComponent },
  { path: '',   redirectTo: '/dev', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
