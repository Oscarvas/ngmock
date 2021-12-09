import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Phnmali1Component } from './phnmali1/phnmali1.component';
import { PhnmaliaComponent } from './phnmalia/phnmalia.component';
import { PhnmsipaComponent } from './phnmsipa/phnmsipa.component';

const routes: Routes = [
  { path: 'ph1', component: PhnmaliaComponent },
  { path: 'ph2', component: Phnmali1Component },
  { path: 'ph3', component: PhnmsipaComponent },
  { path: '',   redirectTo: '/ph3', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
