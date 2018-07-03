import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataShareService } from './data-share.service';
import { BuscarVehiculosComponent } from './buscar-vehiculos/buscar-vehiculos.component';
import { EditarVehiculoComponent } from './editar-vehiculo/editar-vehiculo.component';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    BuscarVehiculosComponent,
    EditarVehiculoComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataShareService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
