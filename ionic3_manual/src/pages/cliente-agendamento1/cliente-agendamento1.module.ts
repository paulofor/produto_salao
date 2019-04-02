

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ClienteAgendamento1Page } from './cliente-agendamento1';

@NgModule({
  declarations: [
    ClienteAgendamento1Page,
  ],
  imports: [
    IonicPageModule.forChild(ClienteAgendamento1Page),
    TranslateModule.forChild()
  ],
  exports: [
    ClienteAgendamento1Page
  ]
})
export class ClienteAgendamento1PageModule { }
