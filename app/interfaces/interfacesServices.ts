//Información Campeonato:
export interface InfoCampeonato {
  nombreTrofeo: string
}

//Información Demarcación:
export interface InfoDemarcacion {
  demarcacion: string
}

//Información Entrenadores:
export interface InfoEntrenadores {
  entrenador: string
  fechaNacimiento: Date
  poblacion: number
  provincia: string
}

//Información Paises:
export interface InfoPaises{
  nombrePais: string
  comunitario: string
}

//Informacion Clubes:
export interface InfoClubes{
  club:string
  nombre:string
  direccion:string
  poblacion:string
  codPostal:string
  tlfno:string
  colores:string
  himno:string
  fax:string
  anioFundacion:number
  presidente:string
  vicepresidente:string
}