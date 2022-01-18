import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicadorAnualComponent } from './indicador-anual.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: IndicadorAnualComponent,
  },
  {
    path: 'indicador-anual',
    component: IndicadorAnualComponent,
  },
];

@NgModule({
  declarations: [IndicadorAnualComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicadorAnualModule {}
