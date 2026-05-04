export class Alumno {

    /* CONSTRUCTOR */
    constructor(
        private _nombre: string,
        private _apellidos: string,
        private _fecha_nac: Date,
        private _email: string,
        private _nota_final: number
    ){}

    /* GETTERS Y SETTERS */

    get nombre(): string {return this._nombre;}
    get apellidos(): string {return this._apellidos;}
    get fecha_nac(): Date {return this._fecha_nac;}
    get email(): string {return this._email;}
    get nota_final(): number {return this._nota_final;}

    /* MÉTODOS */

    public obten_alias(): string{
        let inicialNombre = this._nombre.charAt(0);

        let inicialesApellidos = this._apellidos
            .split(' ')
            .map(palabra => palabra.charAt(0))
            .join('');

        let nombreCompleto: string = (inicialNombre + inicialesApellidos).toUpperCase();

        return nombreCompleto;
    }



}
