


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { HorarioAtendimento, HorarioAtendimentoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-escolhe-servico-profissional',
  templateUrl: 'escolhe-servico-profissional.html'
})
export class EscolheServicoProfissionalPage {
  listaItem: HorarioAtendimento[];

  constructor(public navCtrl: NavController, public srv: HorarioAtendimentoApi, 
  				 private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter EscolheServicoProfissionalPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad EscolheServicoProfissionalPage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: HorarioAtendimento[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  testaFoto() {
    this.screenshot.save('jpg', 100, 'EscolheServicoProfissionalPage');
  }

  
}
