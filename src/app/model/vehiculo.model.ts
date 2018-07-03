
export class Vehiculo{

    NumPlaca: String;
	Color: String;
	Marca: String;
	Estilo: String;
	Anio: Date;
	Potencia: number;
	Cilindraje: number;
	Capacidad: number;
	Peso: number;
	NumChasis: number;
    NumMotor: number;
    Observaciones: String;

    constructor(NumPlaca: String, Color: String, Marca: String, Estilo: String, Anio: Date, Potencia: number, Cilindraje: number, Capacidad: number, Peso: number, NumChasis: number, NumMotor: number, Observaciones: String){
        this.NumPlaca = NumPlaca;
        this.Color = Color
        this.Marca = Marca;
        this.Estilo = Estilo;
        this.Anio = Anio;
        this.Potencia = Potencia;
        this.Cilindraje = Cilindraje;
        this.Capacidad = Capacidad;
        this.Peso = Peso;
        this.NumChasis = NumChasis;
        this.NumMotor = NumMotor;
        this.Observaciones = Observaciones;
    }

}