
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ClienteAgendamento1Page } from '../pages/cliente-agendamento1/cliente-agendamento1';
import { AgendaProfissionalPage } from '../pages/agenda-profissional/agenda-profissional';
import { ResumoAtendimentoPage } from '../pages/resumo-atendimento/resumo-atendimento';
import { EstatisticaProfissionalPage } from '../pages/estatistica-profissional/estatistica-profissional';
import { EstatisticaSalaoPage } from '../pages/estatistica-salao/estatistica-salao';
import { EscolheServicoProfissionalPage } from '../pages/escolhe-servico-profissional/escolhe-servico-profissional';
import { ClienteAgendamento2Page } from '../pages/cliente-agendamento2/cliente-agendamento2';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
	
      { title: 'ClienteAgendamento1' , component: ClienteAgendamento1Page},
	
      { title: 'AgendaProfissional' , component: AgendaProfissionalPage},
	
      { title: 'ResumoAtendimento' , component: ResumoAtendimentoPage},
	
      { title: 'EstatisticaProfissional' , component: EstatisticaProfissionalPage},
	
      { title: 'EstatisticaSalao' , component: EstatisticaSalaoPage},
	
      { title: 'EscolheServicoProfissional' , component: EscolheServicoProfissionalPage},
	
      { title: 'ClienteAgendamento2' , component: ClienteAgendamento2Page},
	
     ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
