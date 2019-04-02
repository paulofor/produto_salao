
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Screenshot } from '@ionic-native/screenshot';
import { ClienteAgendamento1Page } from '../pages/cliente-agendamento1/cliente-agendamento1';
import { AgendaProfissionalPage } from '../pages/agenda-profissional/agenda-profissional';
import { ResumoAtendimentoPage } from '../pages/resumo-atendimento/resumo-atendimento';
import { EstatisticaProfissionalPage } from '../pages/estatistica-profissional/estatistica-profissional';
import { EstatisticaSalaoPage } from '../pages/estatistica-salao/estatistica-salao';
import { ClienteAgendamento2Page } from '../pages/cliente-agendamento2/cliente-agendamento2';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClienteApi } from '../shared/sdk';
import { ServicoApi } from '../shared/sdk';
import { ProfissionalApi } from '../shared/sdk';
import { HorarioProfissionalApi } from '../shared/sdk';
import { HorarioAtendimentoApi } from '../shared/sdk';
import { SalaoApi } from '../shared/sdk';
import { AtendimentoApi } from '../shared/sdk';
import { ChartsModule } from 'ng2-charts';
import { EstatisticaSalaoServicoPage } from '../pages/estatistica-salao-servico/estatistica-salao-servico';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClienteAgendamento1Page,
	
    AgendaProfissionalPage,
	
    ResumoAtendimentoPage,
	
    EstatisticaProfissionalPage,
	
    EstatisticaSalaoPage,
  
    EstatisticaSalaoServicoPage,
   
    ClienteAgendamento2Page,
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    SDKBrowserModule.forRoot(),
    ChartsModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClienteAgendamento1Page,
	
    AgendaProfissionalPage,
	
    ResumoAtendimentoPage,
	
    EstatisticaProfissionalPage,
	
    EstatisticaSalaoPage,
	
    EstatisticaSalaoServicoPage,
	
    ClienteAgendamento2Page,
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
	ClienteApi,
	
	ServicoApi,
	
	ProfissionalApi,
	
	HorarioProfissionalApi,
	
	HorarioAtendimentoApi,
	
	SalaoApi,
	
	AtendimentoApi,
	
    Screenshot
  ]
})
export class AppModule {}
