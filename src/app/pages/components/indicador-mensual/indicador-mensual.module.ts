import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { IndicadorMensualComponent } from './indicador-mensual.component'
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BancosIndicadoresService } from '../../service/bancos-indicadores.service';

const routes: Routes = [
  {
    path: '',
    component: IndicadorMensualComponent,
  },
];
@NgModule({
  declarations: [IndicadorMensualComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [BancosIndicadoresService],
  exports: [RouterModule],
})
export class IndicadorMensualModule {}
