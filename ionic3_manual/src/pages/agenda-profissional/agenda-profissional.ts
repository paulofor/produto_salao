


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { Profissional, ProfissionalApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-agenda-profissional',
  templateUrl: 'agenda-profissional.html'
})
export class AgendaProfissionalPage {
  listaItem: Profissional[];

  constructor(public navCtrl: NavController, public srv: ProfissionalApi, 
  				 private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter AgendaProfissionalPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad AgendaProfissionalPage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: Profissional[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  testaFoto() {
    this.screenshot.save('jpg', 100, 'AgendaProfissionalPage');
  }

  
}
