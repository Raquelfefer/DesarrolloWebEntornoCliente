export class Asignatura {

    constructor(
        private _cod:string,
        private _nombre:string,
        private _horas_sem: number,
        private _num_semanas: number
    ){}

    public horasTotales(): void{
        const horasTotales: number = this._horas_sem * this._num_semanas;
        console.log(horasTotales);
    }
}
