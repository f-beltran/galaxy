export interface MensajeRespuestaSesion{
  tipo: string;
  descripcion: string;
}
export interface DetalleRespuestaSesion{
  id: number;
  idRol: number;
  login: string;
  clave: number;
  nombre: string;
  token: string;
}
export interface RespuestaSesion{
  datos: DetalleRespuestaSesion;
  mensajes: MensajeRespuestaSesion[];
}

//-------------------------------------------------------------------------------------------------------LISTA DE TAREAS
export interface Tarea{
  id?: number;
  idUsuario: number;
  titulo: string;
  contenido: string;
  realizado: number;
  fecha: string;
}
export interface DatosLista{
  pendientes: Tarea[];
  hechos: Tarea[];
}
export interface ListaTareas{
  datos: DatosLista;
  mensajes: MensajeRespuestaSesion[];
}
