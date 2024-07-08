import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PresentesComponent } from './pages/presentes/presentes.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'presentes', component: PresentesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
