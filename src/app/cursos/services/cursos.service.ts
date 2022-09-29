import { Injectable } from '@angular/core';
import { Curso } from 'src/app/coursos/model/curso';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CursosService {
 


private readonly API = './assets/cursos.json';
  httpClient: any;


constructor( httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso[]>(this.API)
    .pipe(
      tap(cursos => console.log(cursos))
      );
  
  }
    

}
