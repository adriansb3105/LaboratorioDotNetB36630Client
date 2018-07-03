import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../model/vehiculo.model';
import { DataShareService } from '../data-share.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

  placa: String;
  color: String;
  marca: String;
  estilo: String;
  anio: Date;
  potencia: number;
  cilindraje: number;
  capacidad: number;
  peso: number;
  numChasis: number;
  numMotor: number;
  observaciones: String;

  constructor(private dataShareService: DataShareService) { }

  ngOnInit() {
    this.dataShareService.vehiculoActual.subscribe(vehiculo => {
      if (vehiculo != null) {
        this.placa = vehiculo.NumPlaca;
        this.color = vehiculo.Color;
        this.marca = vehiculo.Marca;
        this.estilo = vehiculo.Estilo;
        this.anio = vehiculo.Anio;
        this.potencia = vehiculo.Potencia;
        this.cilindraje = vehiculo.Cilindraje;
        this.capacidad = vehiculo.Capacidad;
        this.peso = vehiculo.Peso;
        this.numChasis = vehiculo.NumChasis;
        this.numMotor = vehiculo.NumMotor;
        this.observaciones = vehiculo.Observaciones;
      }
    });
  }

  guardarEdicion() {
    let vehiculo: Vehiculo = new Vehiculo(this.placa, this.color, this.marca, this.estilo, this.anio, this.potencia, this.cilindraje, this.capacidad, this.peso, this.numChasis, this.numMotor, this.observaciones);
    this.dataShareService.guardarEdicion(this.placa, vehiculo).subscribe(data => {
      Swal('Hecho', 'El vehiculo ha sido editado', 'success');
    });
  }

}
