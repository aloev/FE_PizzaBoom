import { Usuario } from './user.model';
import { Comida } from './comida.model';


export interface Orden {

    cliente: string,
    platos : Comida[]
    userId: string,
    id?: string,
}