import { Alumno } from "./alumno";
import { Asignatura } from "./asignatura";

export class Matricula {

    constructor(
        private _alumno: Alumno,
        private _asignatura: Asignatura,
        private _nota_trim1: number,
        private _nota_trim2: number,
        private _nota_trim3: number
    ){}

    get alumno(): Alumno {return this._alumno};
    get asignatura(): Asignatura {return this._asignatura};
    get nota_trim1(): number {return this._nota_trim1};
    get nota_trim2(): number {return this._nota_trim2};
    get nota_trim3(): number {return this._nota_trim3};

    public getNotaMedia(): number{
        const notaMedia = (this._nota_trim1 + this._nota_trim2 + this._nota_trim3)/3;
        return notaMedia;
    }
}
