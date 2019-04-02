import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Profissional, ProfissionalApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-cliente-agendamento1',
  templateUrl: 'cliente-agendamento1.html'
})
export class ClienteAgendamento1Page {
  item: Profissional;

  constructor(public navCtrl: NavController, public srv: ProfissionalApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ClienteAgendamento1Page');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ClienteAgendamento1Page');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: Profissional) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ClienteAgendamento1Page');
  }
  
}
