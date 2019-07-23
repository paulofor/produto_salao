import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RespostaVersaoApi, VisitanteApi, RespostaVersao, Visitante } from '../../app/shared/sdk';
import { CookieService } from 'ngx-cookie-service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the PerguntaInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pergunta-inicial',
  templateUrl: 'pergunta-inicial.html',
})
export class PerguntaInicialPage {


  ID_VERSAOAPP = 2;

  exibePergunta1: boolean = true;
  exibePergunta2: boolean = false;
  exibeAgradecimento: boolean = false;

  resposta1: RespostaVersao = new RespostaVersao();
  resposta2: RespostaVersao = new RespostaVersao();


  cookieValue = 'UNKNOWN';
  visitanteCorrente: Visitante = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private srv: RespostaVersaoApi,
    private cookieService: CookieService,
    private visitanteSrv: VisitanteApi, protected storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerguntaInicialPage');
    this.resposta1.pergunta = 'Você é administrador de Salão de Beleza ?';
    this.resposta2.pergunta = 'Gostaria de ter um aplicativo para seus clientes reservarem horários no seu salão ?';
    this.resposta1.versaoAppId = this.ID_VERSAOAPP;
    this.resposta2.versaoAppId = this.ID_VERSAOAPP;
    this.trataCookie();
  }


  trataCookie() {
    this.cookieValue = this.cookieService.get('idDigicom');
    console.log('Cookie: ', this.cookieValue);
    if (!this.cookieValue) {
      console.log('Cookie vazio');
      this.visitanteSrv.proximoCookie()
        .subscribe((result: any) => {
          console.log('Result Cookie: ', result);
          this.cookieService.set('idDigicom', result.codigoCookie);
          this.cookieValue = result.codigoCookie;
          this.registraVisita();
        })
    } else {
      console.log('Meu Cookie:', this.cookieValue);
      this.registraVisita();
    }
  }


  registraVisita() {
    let visita = new Visitante();
    visita.codigoCookie = this.cookieValue;
    visita.versaoAppId = this.ID_VERSAOAPP;
    console.log('Visita: ', visita);
    this.visitanteSrv.create(visita)
      .subscribe((resultado: any) => {
        console.log('Resultado visitante: ', resultado);
        this.visitanteCorrente = resultado;
      })
  }


  respostaSim1() {
    console.log('Resposta Sim 1');
    this.resposta1.resposta = 'sim';
    this.resposta1.visitanteId = this.visitanteCorrente.id;
    this.srv.create(this.resposta1)
      .subscribe((result) => {
        console.log('RespostaSim1: ', result);
      });
    this.exibePergunta2 = true;
  }


  respostaNao1() {
    console.log('Resposta Não 1');
    this.resposta1.resposta = 'nao';
    this.resposta1.visitanteId = this.visitanteCorrente.id;
    this.srv.create(this.resposta1)
      .subscribe((result) => {
        console.log('RespostaSim1: ', result);
      });
    this.exibeAgradecimento = true;
    this.exibePergunta1 = false;
  }


  respostaSim2() {
    console.log('Resposta Sim 2');
    this.resposta2.resposta = 'sim';
    this.resposta2.visitanteId = this.visitanteCorrente.id;
    this.srv.create(this.resposta2)
      .subscribe((result) => {
        console.log('RespostaSim1: ', result);
      });
    this.exibePergunta1 = false;
    this.exibePergunta2 = false;
    this.exibeAgradecimento = true;
  }

  respostaNao2() {
    console.log('Resposta Não 2');
    this.resposta2.resposta = 'nao';
    this.resposta2.visitanteId = this.visitanteCorrente.id;
    this.srv.create(this.resposta2)
      .subscribe((result) => {
        console.log('RespostaSim1: ', result);
      });
    this.exibePergunta1 = false;
    this.exibePergunta2 = false;
    this.exibeAgradecimento = true;
  }
}
