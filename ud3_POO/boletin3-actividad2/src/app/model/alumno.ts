import { Matricula } from "./matricula";
import {Asignatura} from "./asignatura";
export class Alumno {

    //Constructor
    constructor(
        private _id: number,
        private _nombre: string,
        private _apellidos: string,
        private _fecha_nac: Date,
        private _matriculas: Matricula[]
    ){};

    //Getter y setter
    get id(): number {return this._id};
    get nombre(): string {return this._nombre};
    get apellidos(): string {return this._apellidos};
    get fecha_nac(): Date {return this._fecha_nac};
    get matriculas(): Matricula[] {return this._matriculas};

    set id(id: number) {this._id = id};
    set nombre(nombre: string) {this._nombre = nombre};
    set apellidos(apellidos: string) {this._apellidos = apellidos};
    set fecha_nac(fecha_nac: Date) {this._fecha_nac = fecha_nac};
    set matriculas(matriculas: Matricula[]) {this._matriculas = matriculas};

    calculaEdad():number{
        const hoy = new Date();
        const edad = hoy.getFullYear() - this._fecha_nac.getFullYear();
        return edad;
    }

    asignaturasAprobadas():Asignatura[]{
        return this._matriculas
        .filter(m => m.notaMedia() >= 5)
        .map(m => m.asignatura);
    }
}
