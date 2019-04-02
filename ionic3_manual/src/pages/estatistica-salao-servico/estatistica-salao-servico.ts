import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { HorarioAtendimentoApi, HorarioAtendimento } from '../../shared/sdk';

/**
 * Generated class for the EstatisticaSalaoServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estatistica-salao-servico',
  templateUrl: 'estatistica-salao-servico.html',
})
export class EstatisticaSalaoServicoPage {
  listaItem: HorarioAtendimento[];

  constructor(public navCtrl: NavController, public srv: HorarioAtendimentoApi,
    private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter EstatisticaSalaoServicoPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstatisticaSalaoServicoPage');
  }

  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: HorarioAtendimento[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }

  testaFoto() {
    this.screenshot.save('jpg', 100, 'EstatisticaSalaoServicoPage');
  }


  criaImagem() {
    var cv01: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('cv01');
    var img1: HTMLImageElement = <HTMLImageElement>document.getElementById('img1');
    var ctx = cv01.getContext("2d");
    img1.src = cv01.toDataURL('png');
    cv01.hidden = true;
  }

  public barChartOptions: any = {
    legend: {
      display: true,
      labels: {
        boxWidth: 20,
        boxHeight: 2
      }
    },
    animation: {
      onComplete: this.criaImagem
    },
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public barChartLabels: string[] = ['Dez', 'Jan', 'Fev', 'Mar'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;


  public barChartData: any[] = [
    { data: [519, 359, 378, 272], label: 'Corte' },
    { data: [369, 325, 205, 261], label: 'Escova' },
    { data: [205, 213, 281, 329], label: 'Manicure' },
    { data: [164, 146, 130, 159], label: 'Pedicure' },
    { data: [109, 79, 86, 113], label: 'Maquiagem' }
  ];


}
