

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ResumoAtendimentoPage } from './resumo-atendimento';

@NgModule({
  declarations: [
    ResumoAtendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(ResumoAtendimentoPage),
    TranslateModule.forChild()
  ],
  exports: [
    ResumoAtendimentoPage
  ]
})
export class ResumoAtendimentoPageModule { }
