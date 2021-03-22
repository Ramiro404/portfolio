import { Component, OnInit } from '@angular/core';
import { PROYECTOS } from './lista-proyectos';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos = PROYECTOS;
  constructor() { }

  ngOnInit(): void {
  }

}
