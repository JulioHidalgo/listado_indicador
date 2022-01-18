import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorialModule } from './pages/components/historial/historial.module';
import { MiBancoModule } from './pages/components/mi-banco/mi-banco.module';
import { HeaderComponent } from './pages/components/header/header.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { IndicadorMensualModule} from './pages/components/indicador-mensual/indicador-mensual.module';
import { IndicadorAnualModule }  from './pages/components/indicador-anual/indicador-anual.module';




@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MiBancoModule,
    IndicadorMensualModule,
    IndicadorAnualModule,
    HistorialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
