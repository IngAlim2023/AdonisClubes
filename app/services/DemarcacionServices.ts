import Demarcacion from '#models/demarcacion'
import { InfoDemarcacion } from '#controllers/DemarcacionController'

export default class DemarcacionServices {
  async create({ demarcacion }:InfoDemarcacion) {
    const res = await Demarcacion.create({ demarcacion })
    return res
  }
  async read(){
    const res = await Demarcacion.all();
    return res
  }
  async update(data:InfoDemarcacion, id: any){
    const updated  = await Demarcacion.findOrFail(id);
    updated.demarcacion = data.demarcacion
    return await updated.save()
  }
  async delete(id:any){
    const deleted = await Demarcacion.findOrFail(id);
    
    return await deleted.delete(); 
  }
  async readById(id:any){
    const demarcacion = await Demarcacion.query().where('CodDem', id);
    
    return demarcacion; 
  }
}
