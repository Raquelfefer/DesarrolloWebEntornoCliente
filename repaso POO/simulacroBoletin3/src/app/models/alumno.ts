import { Matricula } from "./matricula";

export class Alumno {

    constructor(
        private _id: number,
        private _nombre: string,
        private _apellidos: string,
        private _fecha_nac: Date,
        private _matriculas: Matricula[]
    ){}

    get id(): number {return this._id}
    get nombre(): string {return this._nombre}
    get apellidos(): string {return this._apellidos}
    get fecha_nac(): Date {return this._fecha_nac}
    get matriculas(): Matricula[] {return this._matriculas}

    set id(id: number) {this._id = id}
    set nombre(nombre: string) {this._nombre = nombre}
    set apellidos(apellidos: string) {this._apellidos = apellidos}
    set fecha_nac(fecha_nac: Date) {this._fecha_nac = fecha_nac}
    set matriculas(matriculas: Matricula[]) {this._matriculas = matriculas}

    public calculaEdad(): void{
        const fechaActual: Date = new Date();
        const edad: number = fechaActual.getFullYear() - this.fecha_nac.getFullYear();
        console.log(edad);
    }

    public asignaturasAprobadas(): void{
        
    }
}
