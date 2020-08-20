import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { SobreComponent } from '../pages/sobre/sobre.component';

import { MetodoalimentoComponent } from '../pages/metodoalimento/metodoalimento.component';

import { MetodoexercicioComponent } from '../pages/metodoexercicio/metodoexercicio.component';
import { MetodovitaminaComponent } from '../pages/metodovitamina/metodovitamina.component';


import { FrutasComponent } from '../pages/frutas/frutas.component';

import { VegetaisComponent } from '../pages/vegetais/vegetais.component';

import { ZincoComponent  }  from '../pages/zinco/zinco.component';

import { OleaginosasComponent  }  from '../pages/oleaginosas/oleaginosas.component';

import { OmegaComponent  }  from '../pages/omega/omega.component';

import { GengibreComponent  }  from '../pages/gengibre/gengibre.component';

import { PimentaComponent  }  from '../pages/pimenta/pimenta.component';



@NgModule({
  declarations: [
    MyApp,
    SobreComponent,
    MetodoalimentoComponent,
    MetodoexercicioComponent,
    MetodovitaminaComponent,
    FrutasComponent,
    VegetaisComponent,
    ZincoComponent,
    OleaginosasComponent,
    OmegaComponent,
    GengibreComponent,
    PimentaComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SobreComponent,
    MetodoalimentoComponent,
    MetodoexercicioComponent,
    MetodovitaminaComponent,
    FrutasComponent,
    VegetaisComponent,
    ZincoComponent,
    OleaginosasComponent,
    OmegaComponent,
    GengibreComponent,
    PimentaComponent
  
  
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
