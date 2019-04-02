

import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { EscolheServicoProfissionalPage } from './escolhe-servico-profissional';

@NgModule({
  declarations: [
    EscolheServicoProfissionalPage,
  ],
  imports: [
    IonicPageModule.forChild(EscolheServicoProfissionalPage),
    TranslateModule.forChild()
  ],
  exports: [
    EscolheServicoProfissionalPage
  ]
})
export class EscolheServicoProfissionalPageModule { }
