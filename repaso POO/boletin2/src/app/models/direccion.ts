export class Direccion {

    constructor (
        private _id_direccion: number,
        private _cod_postal: string,
        private _ciudad: string,
        private _municipio: string,
        private _provincia: string
    ){}

    get id_direccion():number {return this._id_direccion};
    get cod_postal():string {return this._cod_postal};
    get ciudad():string {return this._ciudad};
    get municipio():string {return this._municipio};
    get provincia():string {return this._provincia};



}
