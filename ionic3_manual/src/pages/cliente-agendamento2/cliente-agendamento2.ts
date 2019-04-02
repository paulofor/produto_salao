import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { Atendimento, AtendimentoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-cliente-agendamento2',
  templateUrl: 'cliente-agendamento2.html'
})
export class ClienteAgendamento2Page {
  item: Atendimento;

  constructor(public navCtrl: NavController, public srv: AtendimentoApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ClienteAgendamento2Page');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ClienteAgendamento2Page');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: Atendimento) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ClienteAgendamento2Page');
  }
  
}
