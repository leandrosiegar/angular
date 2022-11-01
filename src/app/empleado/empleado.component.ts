import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  nombre="Pepe";
  apellido = "Domínguez";
  edad = 33;
  empresa = "laquesea";

  /*
  getEdad() {
    return this.edad;
  }
  */

  constructor() { }

  ngOnInit(): void {
  }

}
