import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

   heroeDelete: string | undefined = '';
   heroes: string[] = ['Spiderman' , 'IronMan' , 'Thor' , 'Hulk'];

   get heroeBorrado(){

      return this.heroeDelete;

   }


   borrarHeroe(): void{


         this.heroeDelete =  this.heroes.shift();

   }

}
