

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ClienteAgendamento2Page } from './cliente-agendamento2';

@NgModule({
  declarations: [
    ClienteAgendamento2Page,
  ],
  imports: [
    IonicPageModule.forChild(ClienteAgendamento2Page),
    TranslateModule.forChild()
  ],
  exports: [
    ClienteAgendamento2Page
  ]
})
export class ClienteAgendamento2PageModule { }
