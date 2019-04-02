
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface AtendimentoInterface {
}

export class Atendimento implements AtendimentoInterface {
  constructor(data?: AtendimentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Atendimento";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Atendimento for dynamic purposes.
  **/
  public static factory(data: AtendimentoInterface): Atendimento{
    return new Atendimento(data);
  }
  /**
  * @method getModelDefinition
  * @author Gerador Java
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Atendimento',
      plural: 'Atendimentos',
      path: 'Atendimentos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}