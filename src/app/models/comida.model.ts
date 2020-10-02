

export class Comida {

    constructor(
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