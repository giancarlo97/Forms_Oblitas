import { Component, OnInit } from '@angular/core';

export interface Clase {
  nombre: string;
  profesor: string;
}

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent implements OnInit {
  clase: Clase = {
    nombre: '',
    profesor: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
