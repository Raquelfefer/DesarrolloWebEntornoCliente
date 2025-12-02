export class Direccion {

    //Constructor/es y declaración de atributos
    constructor(
        private _idDireccion: number,
        private _codPostal: string,
        private _ciudad: string,
        private _municipio: string,
        private _provincia: string
    ){};

    //Getters y setters (en este caso son redundantes los getters)
    get idDireccion(): number {return this._idDireccion};
    get codPostal(): string {return this._codPostal};
    get ciudad(): string {return this._ciudad};
    get municipio(): string {return this._municipio};
    get provincia(): string {return this._provincia};

    set idDireccion(idDireccion: number) {this._idDireccion = idDireccion};
    set codPostal(codPostal: string) {this._codPostal = codPostal};
    set ciudad(ciudad: string) {this._ciudad = ciudad};
    set municipio(municipio: string) {this._municipio = municipio};
    set provincia(provincia: string) {this._provincia = provincia};

}
