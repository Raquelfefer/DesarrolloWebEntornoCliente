import { Asignatura } from "./asignatura";

export class Matricula {

    constructor(
        private _nota1: number,
        private _nota2: number,
        private _nota3: number,
        private _fecha_mat: Date,
        private _asignatura: Asignatura
    ){}

   
}
