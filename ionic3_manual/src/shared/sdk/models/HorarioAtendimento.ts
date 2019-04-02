
/* tslint:disable */
import {
} from '../index';

declare var Object: any;
export interface HorarioAtendimentoInterface {
}

export class HorarioAtendimento implements HorarioAtendimentoInterface {
  constructor(data?: HorarioAtendimentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `GanhoDorCanvasMySql`.
   */
  public static getModelName() {
    return "HorarioAtendimento";
  }
  /**
  * @method factory
  * @author Gerador Java 
  * @license MIT
  * This method creates an instance of HorarioAtendimento for dynamic purposes.
  **/
  public static factory(data: HorarioAtendimentoInterface): HorarioAtendimento{
    return new HorarioAtendimento(data);
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
      name: 'HorarioAtendimento',
      plural: 'HorarioAtendimentos',
      path: 'HorarioAtendimentos',
      idName: 'id',
      properties: {
		
      },
      relations: {
      }
    }
  }
}