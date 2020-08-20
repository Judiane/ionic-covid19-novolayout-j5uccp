import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";

import { FrutasComponent } from "../frutas/frutas.component";

import { VegetaisComponent } from "../vegetais/vegetais.component";

import { ZincoComponent } from "../zinco/zinco.component";

import { OleaginosasComponent } from "../oleaginosas/oleaginosas.component";

import { OmegaComponent } from "../omega/omega.component";

import { GengibreComponent } from "../gengibre/gengibre.component";

import { PimentaComponent  }  from '../pimenta/pimenta.component';

import { AlhoComponent  }  from '../alho/alho.component';

@Component({
  templateUrl: "./metodoalimento.component.html",
  styleUrls: ["./metodoalimento.component.css"]
})
export class MetodoalimentoComponent {

  constructor(public navCtrl: NavController) {}

  public Frutas() {
    this.navCtrl.push(FrutasComponent);
  }

  public Vegetais() {
    this.navCtrl.push(VegetaisComponent);
  }

  public Zinco() {
    this.navCtrl.push(ZincoComponent);
  }

  public Oleaginosas() {
    this.navCtrl.push(OleaginosasComponent);
  }

  public Omega() {
    this.navCtrl.push(OmegaComponent);
  }

  public Gengibre() {
    this.navCtrl.push(GengibreComponent);
  }

  public Pimenta() {
    this.navCtrl.push(PimentaComponent);
  }

  public Alho() {
    this.navCtrl.push(AlhoComponent);
  }
}
