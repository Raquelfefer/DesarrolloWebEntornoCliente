export class Alumno {

    constructor(
        private _nombre:string,
        private _apellidos:string,
        private _fechaNac: Date,
        private _nota1: number,
        private _nota2: number,
        private _nota3: number
    ){};

    get nombre(): string {return this._nombre};
    get apellidos(): string {return this._apellidos};
    get fechaNac(): Date {return this._fechaNac};
    get nota1(): number {return this._nota1};
    get nota2(): number {return this._nota2};
    get nota3(): number {return this._nota3};

    set nombre(nombre: string) {this._nombre = nombre};
    set apellidos(apellidos: string) {this._apellidos = apellidos};
    set fechaNac(fechaNac: Date) {this._fechaNac = fechaNac};
    set nota1(nota1: number) {this._nota1 = nota1};
    set nota2(nota2: number) {this._nota2 = nota2};
    set nota3(nota3: number) {this._nota3 = nota3};

    get notaMedia(): number {return (this._nota1 + this._nota2 + this._nota3)/3};
    
    get notaMasAlta(): number {return Math.max(this.nota1, this.nota2, this.nota3)}

}
