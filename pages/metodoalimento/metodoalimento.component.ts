import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { FrutasComponent } from '../frutas/frutas.component';

@Component({

  templateUrl: './metodoalimento.component.html',
  styleUrls: ['./metodoalimento.component.css']

 
})
export class MetodoalimentoComponent  {

  constructor(public navCtrl: NavController) { }

  public Frutas() {

   this.navCtrl.push(FrutasComponent);
  }

}