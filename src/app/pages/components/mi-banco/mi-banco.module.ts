import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiBancoComponent } from './mi-banco.component';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from '../historial/historial.component';
import { IndicadorAnualComponent } from '../indicador-anual/indicador-anual.component';
import { IndicadorMensualComponent } from '../indicador-mensual/indicador-mensual.component';
const routes: Routes = [
  {
    path: '',
    component: MiBancoComponent,
    children: [
      {
        path: 'historial',
        component: HistorialComponent,
      },
      {
        path: 'indicador-anual',
        component: IndicadorAnualComponent,
      },
      {
        path: 'indicador-mensual',
        component: IndicadorMensualComponent,
      },
    ],
  },
];
@NgModule({
  declarations: [MiBancoComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [MiBancoComponent, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MiBancoModule {}
