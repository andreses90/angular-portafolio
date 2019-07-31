import { Component } from '@angular/core';

import { Perro } from '../perro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lista:string[]=["dinki","taison","honey"];
  listaPerro: Perro[] = [
    { id: 1, name: 'Dinky' ,descripcion:'vive en concepcion',raza:'pastor aleman',imagen:'https://www.hola.com/imagenes/estar-bien/20180823128631/cosas-que-quizas-no-sabias-de-tu-pastor-aleman-cs/0-593-146/cosassobrepastoraleman-t.jpg' },
    { id: 2, name: 'Tayson' ,descripcion:'vive en concepcion',raza:'terrier chileno',imagen:'https://mestizos.cl/wp-content/uploads/2018/09/Terrier-chileno-800.jpg' },
    { id: 3, name: 'Honey' ,descripcion:'vive en san gonzalo',raza:'poodle',imagen:'http://ve.dogourmet.com/home/wp-content/uploads/2018/10/breed-poodle-2.jpg' }

  ];

  title = 'angular-portafolio';
}
