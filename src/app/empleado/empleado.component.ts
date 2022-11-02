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
  // empresa = "laquesea";


  /*
  getEdad() {
    return this.edad;
  }
  */

  statusInputText = false;
  userLogged = false;
  txtLogueado = "No te has logueado todavía";

  activarUser() {
    this.userLogged = false;
  }

  showUserChecked(event:Event) {
    // alert("El usuario ha pulsado el checkbox");
    // this.txtLogueado = "Te has logueado correctamente";
    // alert(event.target);
    // para saber que tipo de elemento es (por ejemplo: HTMLInputElement) con poner console.log(event.target) ya te dije cuál es
    if ((<HTMLInputElement>event.target).value == "S") {
       this.txtLogueado = "Te has logueado correctamente";
    }
    else {
      this.txtLogueado = "Te has deslogueado";
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
