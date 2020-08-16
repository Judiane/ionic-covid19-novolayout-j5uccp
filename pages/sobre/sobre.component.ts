import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';


import { MetodoalimentoComponent } from '../metodoalimento/metodoalimento.component';

import { MetodoexercicioComponent } from '../metodoexercicio/metodoexercicio.component';

import { MetodovitaminaComponent } from '../metodovitamina/metodovitamina.component';


@Component({
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {

//Atributo
//Método
//Método do botão para redirecionamento descobir 
constructor(public navCtrl: NavController) { }

  public Alimento() {

   this.navCtrl.push(MetodoalimentoComponent);
  }
  
  public Exercicio() {

   this.navCtrl.push(MetodoexercicioComponent);
  }

   public Vitamina() {

   this.navCtrl.push(MetodovitaminaComponent);
  }

}