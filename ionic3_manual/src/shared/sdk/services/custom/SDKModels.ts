
import { Injectable } from '@angular/core';
import { Container } from '../../models/Container';
import { User } from '../../models/User';
import { Cliente } from '../../models/Cliente';
import { Servico } from '../../models/Servico';
import { Profissional } from '../../models/Profissional';
import { HorarioProfissional } from '../../models/HorarioProfissional';
import { HorarioAtendimento } from '../../models/HorarioAtendimento';
import { Salao } from '../../models/Salao';
import { Atendimento } from '../../models/Atendimento';
export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
	Cliente: Cliente,
	Servico: Servico,
	Profissional: Profissional,
	HorarioProfissional: HorarioProfissional,
	HorarioAtendimento: HorarioAtendimento,
	Salao: Salao,
	Atendimento: Atendimento,
	User: User,
    Container: Container
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
