

export class Comida {

    constructor(
        public id          : string,
        public nombre      : string,
        public descripcion : string,
        public img         : string,
        public precio      : number,
        public autor?       : string,
        public cantidad?   : string,
        public total?      : number,
    ){

    }

}



export interface food {

    id          : string,
    nombre      : string,
    descripcion : string,
    img         : string,
    precio      : number,
    autor?       : string,
    cantidad?   : string,
    total?      : number,

}