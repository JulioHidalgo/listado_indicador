import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'indicadorMensual',
    loadChildren: () =>
      import(
        './pages/components/indicador-mensual/indicador-mensual.module'
      ).then((m) => m.IndicadorMensualModule),
  },
  {
    path: 'indicadorAnual',
    loadChildren: () =>
      import('./pages/components/indicador-anual/indicador-anual.module').then(
        (m) => m.IndicadorAnualModule
      ),
  },
  {
    path: 'historial',
    loadChildren: () =>
      import('./pages/components/historial/historial.module').then(
        (m) => m.HistorialModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
