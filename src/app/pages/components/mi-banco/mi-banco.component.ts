import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-banco',
  templateUrl: './mi-banco.component.html',
  styleUrls: ['./mi-banco.component.scss'],
})
export class MiBancoComponent implements OnInit {
  titulo: string;
  tituloAccion: string;
  constructor(private router: Router) {
    this.titulo = 'Indicador Anual';
    this.tituloAccion = '';
    this.indicadorMensual();
  }

  ngOnInit(): void {}
  indicadorMensual() {
    this.tituloAccion = 'Indicador Mensual';
    this.router.navigate(['/indicadorMensual']);
  }

  transferenciaDestinatario() {
    this.tituloAccion = 'Indicador Anual';
    this.router.navigate(['/indicadorAnual']);
  }

  movimientoTransferencia() {
    this.tituloAccion = 'Historial';
    this.router.navigate(['/historial']);
  }
}
