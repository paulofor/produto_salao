

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { EstatisticaSalaoPage } from './estatistica-salao';

@NgModule({
  declarations: [
    EstatisticaSalaoPage,
  ],
  imports: [
    IonicPageModule.forChild(EstatisticaSalaoPage),
    TranslateModule.forChild()
  ],
  exports: [
    EstatisticaSalaoPage
  ]
})
export class EstatisticaSalaoPageModule { }
