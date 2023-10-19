import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { BarradeprogresoComponent } from "./paginas/barradeprogreso/barradeprogreso.component";

const routes: Routes = [
  { 
      path: '',
      redirectTo: 'inicio',
      pathMatch : 'full'
    },
  {
  path: 'inicio',
  component:InicioComponent
},
{
  path: 'barradeprogreso',
  component:BarradeprogresoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
