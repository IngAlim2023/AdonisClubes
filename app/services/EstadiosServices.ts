import Estadio from '#models/estadio'
import { InfoEstadios } from '../interfaces/interfacesServices.js'

export default class EstadiosServices {
  async create(data: InfoEstadios) {
    return await Estadio.create(data)
  }
  async read() {
    return await Estadio.all()
  }
  async delete(id: any) {
    const estadio = await Estadio.findOrFail(id)
    return await estadio.delete()
  }
}
