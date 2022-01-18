import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-indicador-anual',
  templateUrl: './indicador-anual.component.html',
  styleUrls: ['./indicador-anual.component.scss'],
})
export class IndicadorAnualComponent implements OnInit {
  transferencia = new FormGroup({
    banco: new FormControl(''),
    monto: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
