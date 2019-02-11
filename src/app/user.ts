export class User {

    constructor(
        public id: number,
        public nombre: string,
        public apellidos: string,
        public ciudad: string,
        public telefono: string,
        public email: string,
        public usuario: string,
        public password: string,
        public active: boolean
    )
    {}
}
