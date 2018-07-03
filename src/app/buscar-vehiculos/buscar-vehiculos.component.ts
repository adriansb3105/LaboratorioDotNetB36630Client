import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../model/vehiculo.model';
import { DataShareService } from '../data-share.service';
import { FilterPipe } from '../filter.pipe';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-vehiculos',
  templateUrl: './buscar-vehiculos.component.html',
  styleUrls: ['./buscar-vehiculos.component.css']
})
export class BuscarVehiculosComponent implements OnInit {

  public vehiculos: Vehiculo[];

  constructor(private dataShareService: DataShareService, private filterPipe: FilterPipe) { }

  ngOnInit() {
    this.dataShareService.obtenerVehiculos().subscribe(data => {
      this.vehiculos = data;
    });
  }

  editarVehiculo(vehiculo: Vehiculo){
    this.dataShareService.editarVehiculo(vehiculo);
    Swal('Editar', 'Ingrese a la pestaña de Información General', 'success');
  }

  getVehiculos(): Vehiculo[]{
    return this.vehiculos;
  }

}
