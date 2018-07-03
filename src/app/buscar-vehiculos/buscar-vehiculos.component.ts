import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../model/vehiculo.model';
import { DataShareService } from '../data-share.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-buscar-vehiculos',
  templateUrl: './buscar-vehiculos.component.html',
  styleUrls: ['./buscar-vehiculos.component.css']
})
export class BuscarVehiculosComponent implements OnInit {

  public vehiculos: Vehiculo[];
  //public vehiculo: Vehiculo;

  constructor(private dataShareService: DataShareService, private filterPipe: FilterPipe) { }

  ngOnInit() {
    /*this.dataShareService.currentMessage.subscribe(vehiculo => {
      if(vehiculo != null){
        this.vehiculo = vehiculo;
      }
    });*/
    this.dataShareService.obtenerVehiculos().subscribe(data => {
      this.vehiculos = data;
    });
  }

  editarVehiculo(vehiculo: Vehiculo){
    this.dataShareService.editarVehiculo(vehiculo);
  }

  getVehiculos(): Vehiculo[]{
    return this.vehiculos;
  }

}
