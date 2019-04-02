

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SDKBrowserModule, SDKModels, LoopBackAuth, InternalStorage } from '../shared/sdk';
import { HttpClientModule } from '@angular/common/http';
import { SocketDriver } from '../shared/sdk/sockets/socket.driver';

import { ClienteApi } from '../shared/sdk';
import { ServicoApi } from '../shared/sdk';
import { ProfissionalApi } from '../shared/sdk';
import { HorarioProfissionalApi } from '../shared/sdk';
import { HorarioAtendimentoApi } from '../shared/sdk';
import { SalaoApi } from '../shared/sdk';
import { AtendimentoApi } from '../shared/sdk';


@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		SDKBrowserModule.forRoot(),
	],
	providers: [
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
	],
	declarations: 
	[
	]
})
export class ServicoModule { }