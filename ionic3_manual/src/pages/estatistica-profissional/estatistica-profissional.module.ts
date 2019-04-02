

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { EstatisticaProfissionalPage } from './estatistica-profissional';

@NgModule({
  declarations: [
    EstatisticaProfissionalPage,
  ],
  imports: [
    IonicPageModule.forChild(EstatisticaProfissionalPage),
    TranslateModule.forChild()
  ],
  exports: [
    EstatisticaProfissionalPage
  ]
})
export class EstatisticaProfissionalPageModule { }
