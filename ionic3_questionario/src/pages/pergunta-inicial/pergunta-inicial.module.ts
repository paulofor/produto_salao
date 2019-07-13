import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerguntaInicialPage } from './pergunta-inicial';

@NgModule({
  declarations: [
    PerguntaInicialPage,
  ],
  imports: [
    IonicPageModule.forChild(PerguntaInicialPage),
  ],
})
export class PerguntaInicialPageModule {}
