import { Asignatura } from "./asignatura";
export class Matricula {

    //Constructor
    constructor(
        private _nota1: number,
        private _nota2: number,
        private _nota3: number,
        private _fecha_mat: Date,
        private _asignatura: Asignatura
    ){}

    get nota1(): number {return this._nota1};
    get nota2(): number {return this._nota2};
    get nota3(): number {return this._nota3};
    get fecha_mat(): Date {return this._fecha_mat};
    get asignatura(): Asignatura {return this._asignatura};

    set nota1(nota1: number) {this._nota1 = nota1};
    set nota2(nota2: number) {this._nota2 = nota2};
    set nota3(nota3: number) {this._nota3 = nota3};
    set fecha_mat(fecha_mat: Date) {this._fecha_mat = fecha_mat};
    set asignatura(asignatura: Asignatura) {this._asignatura = asignatura};

    notaMedia():number{
        return (this._nota1+this._nota2+this._nota3)/3;
    }

}
