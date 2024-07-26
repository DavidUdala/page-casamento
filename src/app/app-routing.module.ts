import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PresentesComponent } from './pages/presentes/presentes.component';
import { PresencaComponent } from './pages/presenca/presenca.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'presentes', component: PresentesComponent },
  { path: 'presenca', component: PresencaComponent },
  { path: 'endereco', component: EnderecoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
