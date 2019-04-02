
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface ServicoInterface {
}

export class Servico implements ServicoInterface {
  constructor(data?: ServicoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Servico";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Servico for dynamic purposes.
  **/
  public static factory(data: ServicoInterface): Servico{
    return new Servico(data);
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
      name: 'Servico',
      plural: 'Servicos',
      path: 'Servicos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}