
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface ProfissionalInterface {
}

export class Profissional implements ProfissionalInterface {
  constructor(data?: ProfissionalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "Profissional";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of Profissional for dynamic purposes.
  **/
  public static factory(data: ProfissionalInterface): Profissional{
    return new Profissional(data);
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
      name: 'Profissional',
      plural: 'Profissionals',
      path: 'Profissionals',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}