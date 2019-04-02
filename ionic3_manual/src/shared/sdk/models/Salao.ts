
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface SalaoInterface {
}

export class Salao implements SalaoInterface {
  constructor(data?: SalaoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Salao";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Salao for dynamic purposes.
  **/
  public static factory(data: SalaoInterface): Salao{
    return new Salao(data);
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
      name: 'Salao',
      plural: 'Salaos',
      path: 'Salaos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}