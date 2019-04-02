
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface HorarioProfissionalInterface {
}

export class HorarioProfissional implements HorarioProfissionalInterface {
  constructor(data?: HorarioProfissionalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "HorarioProfissional";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of HorarioProfissional for dynamic purposes.
  **/
  public static factory(data: HorarioProfissionalInterface): HorarioProfissional{
    return new HorarioProfissional(data);
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
      name: 'HorarioProfissional',
      plural: 'HorarioProfissionals',
      path: 'HorarioProfissionals',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}