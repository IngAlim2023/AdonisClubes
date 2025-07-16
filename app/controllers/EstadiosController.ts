import EstadiosServices from '#services/EstadiosServices'
import { HttpContext } from '@adonisjs/core/http'
import { InfoEstadios } from '../interfaces/interfacesServices.js'

const estadioN = new EstadiosServices()

export default class EstadiosController {
  async createEstadio({ request, response }: HttpContext) {
    try {
      const {
        estadio,
        direccion,
        codPostal,
        poblacion,
        provincia,
        capacidad,
        sentados,
        inauguracion,
        dimensiones,
        CodClub,
      } = request.body()
      const data: InfoEstadios = {
        estadio,
        direccion,
        codPostal,
        poblacion,
        provincia,
        capacidad,
        sentados,
        inauguracion,
        dimensiones,
        CodClub,
      }
      const estadioNew = await estadioN.create(data)
      return response.status(201).json({ msj: 'Estadio creado.', data: estadioNew })
    } catch (e) {
        console.log(e)
      return response.status(500).json({ msj: 'Error interno.' })
    }
  }
  async readEstadios({ response }: HttpContext) {
    try {
      const estadios = await estadioN.read()
      return response.status(200).json({ msj: 'Información obtenida.', data: estadios })
    } catch (e) {
      return response.status(500).json({ msj: 'Error interno.' })
    }
  }
  async deleteEstadio({params, response}:HttpContext){
    try{
        const { id } = params;
        await estadioN.delete(id)
        return response.status(200).json({msj:'Registro eliminado.'})
    }catch(e){
      return response.status(500).json({ msj: 'Error interno.' })
    }
  }
}
