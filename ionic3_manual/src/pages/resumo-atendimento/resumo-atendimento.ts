import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';

import { HorarioAtendimento, HorarioAtendimentoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-resumo-atendimento',
  templateUrl: 'resumo-atendimento.html'
})
export class ResumoAtendimentoPage {
  item: HorarioAtendimento;

  constructor(public navCtrl: NavController, public srv: HorarioAtendimentoApi, 
  				private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ResumoAtendimentoPage');
    this.carregaItem();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad ResumoAtendimentoPage');
  }
  
  carregaItem() {
    this.srv.obtemPrimeiro()
      .subscribe((result: HorarioAtendimento) => {
        console.log('Result', JSON.stringify(result));
        this.item = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'ResumoAtendimentoPage');
  }
  
}
