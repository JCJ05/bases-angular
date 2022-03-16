import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorModule } from "../contador/contador.module";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations:[
    HeroeComponent,
    ListadoComponent
  ],

  exports: [
    ListadoComponent
  ],

  imports: [ // Aqui van modulos
      CommonModule
  ]

})
export class HeroesModule {



}
