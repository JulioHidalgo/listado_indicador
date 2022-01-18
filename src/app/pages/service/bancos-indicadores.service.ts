import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class BancosIndicadoresService {
  constructor() {}

  async obtenerIndicadorExterno(): Promise<any> {
    try {
      return await axios
        .get(`https://mindicador.cl/api`)
        .then((response) => {
          if (response.status !== 200) return this.mensajeError(response);
          // console.log(response.data);
          return {
            codigo: response.status,
            data: response.data,
          };
        });
    } catch (error) {
      console.log(error);
    }
  }

  mensajeError(response: any) {
    return { codigo: response.data.code, mensaje: response.data.message };
  }
}
