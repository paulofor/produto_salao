

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { AgendaProfissionalPage } from './agenda-profissional';

@NgModule({
  declarations: [
    AgendaProfissionalPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendaProfissionalPage),
    TranslateModule.forChild()
  ],
  exports: [
    AgendaProfissionalPage
  ]
})
export class AgendaProfissionalPageModule { }
