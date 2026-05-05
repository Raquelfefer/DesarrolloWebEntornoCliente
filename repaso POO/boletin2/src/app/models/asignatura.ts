import { Profesor } from "./profesor";

export class Asignatura {

    constructor(
        private _nombre: string,
        private _descripcion: string,
        private _num_horas: number,
        private _profesor: Profesor
    ){}

    get nombre(): string {return this._nombre};
    get descripcion(): string {return this._descripcion};
    get num_horas(): number {return this._num_horas};
    get profesor(): Profesor {return this._profesor};

}
