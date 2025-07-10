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