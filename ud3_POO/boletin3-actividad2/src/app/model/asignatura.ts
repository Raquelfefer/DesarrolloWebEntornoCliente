export class Asignatura {

    constructor(
        private _cod:string,
        private _nombre:string,
        private _horas_sem:number,
        private _num_semanas:number
    ){}

    get cod(): string {return this._cod};
    get nombre(): string {return this._nombre};
    get horas_sem(): number {return this._horas_sem};
    get num_semanas(): number {return this._num_semanas};

    set cod(cod: string) {this._cod = cod};
    set nombre(nombre: string) {this._nombre = nombre};
    set horas_sem(horas_sem: number) {this._horas_sem = horas_sem};
    set num_semanas(num_semanas: number) {this._num_semanas = num_semanas};

    horas_totales():number{
        const horas_totales = this._horas_sem*this._num_semanas;
        return horas_totales;
    }
}
