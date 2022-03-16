import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contadore/contador.component";


@NgModule({

   declarations: [
     ContadorComponent
   ],

   exports: [

     ContadorComponent

   ]

})
export class ContadorModule {


}
