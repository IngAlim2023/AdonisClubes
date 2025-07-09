import DemarcacionServices from '#services/DemarcacionServices'
import { HttpContext } from '@adonisjs/core/http'

const demarcacionN = new DemarcacionServices()

export interface InfoDemarcacion {
  demarcacion: string
}

export default class DemarcacionController {
  async createDemarcacion({ request, response }: HttpContext) {
    try {
      const { demarcacion } = request.body()
      const res = await demarcacionN.create({ demarcacion })
      return response.json({ msj: 'demarcación creada', datos: res })
    } catch (e) {
      return response.json({ msj: 'Error al crear la demarcación' })
    }
  }
  async readDemarcaciones({ response }: HttpContext) {
    try {
      const res = await demarcacionN.read()
      return response.json({ msj: 'Información obtenida', data: res })
    } catch (e) {
      return response.json({ msj: 'Error al encontrar la información' })
    }
  }
  async updateDemarcacion({ params, request, response }: HttpContext) {
    try {
        const { id } = params;
        const {demarcacion} = request.body();

      const res = await demarcacionN.update({demarcacion}, id)
      return response.json({ msj: 'Informacion Actualizada', data: res })
    } catch (e) {
      return response.json({ msj: 'Error al actualizar la información' })
    }
  }
  async deleteDemarcacion({params, response}:HttpContext){
    try{
       const {id} = params;
       const res = await demarcacionN.delete(id);
       return response.json({msj:'Demarcación eliminada', data: res}) 
    } catch (e){
        return response.json({msj:'Error al eliminar'})
    }
  }
}
