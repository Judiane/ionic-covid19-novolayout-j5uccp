import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { FrutasComponent } from '../frutas/frutas.component';

 import { VegetaisComponent } from '../vegetais/vegetais.component';

 import { ZincoComponent  }  from '../zinco/zinco.component';

@Component({

  templateUrl: './metodoalimento.component.html',
  styleUrls: ['./metodoalimento.component.css']

 
})
export class MetodoalimentoComponent  {

  constructor(public navCtrl: NavController) { }

  public Frutas() {

   this.navCtrl.push(FrutasComponent);
  }

  public Vegetais() {

   this.navCtrl.push(VegetaisComponent);
  }

  
  public Zinco() {

   this.navCtrl.push(ZincoComponent);
  }

}