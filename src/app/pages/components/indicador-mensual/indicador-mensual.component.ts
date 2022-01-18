import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { BancosIndicadoresService } from "../../service/bancos-indicadores.service";

@Component({
	selector: "app-indicador-mensual",
	templateUrl: "./indicador-mensual.component.html",
	styleUrls: ["./indicador-mensual.component.scss"]
})
export class IndicadorMensualComponent implements OnInit {
	Bancos: any = [];

	indicadores: any ;

	destinatario = new FormGroup({
		rut: new FormControl(""),
		nombre: new FormControl(""),
		correo: new FormControl(""),
		telefono: new FormControl(""),
		banco: new FormControl(""),
		tipoCuenta: new FormControl(""),
		numeroCuenta: new FormControl("")
	});
	constructor(public fb: FormBuilder, private bancosIndicadoresService: BancosIndicadoresService) {}

	async ngOnInit() {
		await this.bancosIndicadoresService.obtenerIndicadorExterno().then(res => {
			this.indicadores = res.data as any;
			// console.log(this.indicadores.bitcoin.codigo)
			console.log(this.indicadores)
		});

	}
}
