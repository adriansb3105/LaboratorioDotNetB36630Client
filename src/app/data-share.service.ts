import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Vehiculo } from './model/vehiculo.model';

@Injectable()
export class DataShareService {

    private messageSource = new BehaviorSubject<Vehiculo>(null);
    vehiculoActual = this.messageSource.asObservable();
    private url = 'http://localhost:51966/api/';
    private headers;

    constructor(private router: Router, private http: Http){
        this.headers = new Headers();
        this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
        this.headers.append('Access-Control-Allow-Methods', 'GET');
        this.headers.append('Access-Control-Allow-Origin', '*');
    }

    editarVehiculo(vehiculo: Vehiculo){
        this.messageSource.next(vehiculo);
    }

    obtenerVehiculos(): Observable<Vehiculo[]> {
        return this.http.get(this.url + "vehiculo/", { headers: this.headers})
        .pipe(map(response => response.json()))
    }
}
