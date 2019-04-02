


import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';


import { HorarioAtendimento, HorarioAtendimentoApi } from '../../shared/sdk';

@IonicPage()
@Component({
  selector: 'page-estatistica-salao',
  templateUrl: 'estatistica-salao.html'
})
export class EstatisticaSalaoPage {
  listaItem: HorarioAtendimento[];

  constructor(public navCtrl: NavController, public srv: HorarioAtendimentoApi, 
  				 private screenshot: Screenshot, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter EstatisticaSalaoPage');
    this.carregaLista();
  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad EstatisticaSalaoPage');
  }
  
  carregaLista() {
    this.srv.obtemLista()
      .subscribe((result: HorarioAtendimento[]) => {
        console.log('Result', JSON.stringify(result));
        this.listaItem = result;
      });
  }
  
  testaFoto() {
    this.screenshot.save('jpg', 100, 'EstatisticaSalaoPage');
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
    { data: [2100, 1840, 1520, 1920], label: 'Agendados' },
    { data: [1365, 1122, 1081, 1133], label: 'Concluídos' },
    { data: [315, 294, 244, 442], label: 'Faltas' },
    { data: [420, 423, 198, 346], label: 'Livres' }
  ];

  
}
