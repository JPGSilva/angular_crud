import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/coursos/model/curso';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {


//cursos: string[] = [];
    
coursos: Curso[] = [

  { _id: 1, name: 'Sthefanny', nota1: 7.0, nota2: 5.0, status: 'success'},
  { _id: 2, name: 'Sthela', nota1: 1.0, nota2: 3.0, status: 'insucesso'},
  { _id: 3, name: 'Karla', nota1: 5.0, nota2: 3.0, status: 'sucess'},
  { _id: 4, name: 'Luiz', nota1: 9.0, nota2: 7.0, status: 'insucesso'},
  { _id: 5, name: 'Joao', nota1: 6.0, nota2: 7.0, status: 'sucess'},
  { _id: 6, name: 'Douglas', nota1: 7.0, nota2: 3.0, status: 'insucesso'},
];

displayedColumns = ['id', 'name', 'nota1', 'nota2', 'status'];



  
  constructor() { }

  ngOnInit(): void {


      
  }

}
