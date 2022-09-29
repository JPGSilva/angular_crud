import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/coursos/model/curso';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {


//cursos: string[] = [];
    
cursos: Observable<Curso[]>;
displayedColumns = ['id', 'name', 'nota1', 'nota2', 'status'];

    
//coursosService: CursosService; //declaracao da propriedade curso service
//cursos: Curso[];

  constructor( private coursosService: CursosService) { 
    //this.coursosService = new CursosService();
    //this.cursos = this.coursosService.list();


    this.cursos = this.coursosService.list();

  }

  ngOnInit(): void {

    
      
  }

}
