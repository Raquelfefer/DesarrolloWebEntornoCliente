import {Alumno} from './alumno';

export class Convenio {

    /* CONSTRUCTOR */

    constructor(
        private _fecha_inicio: Date,
        private _fecha_fin: Date,
        private _alumnos: Alumno[],
        private _num_horas: number
    ){}

    /* GETTERS Y SETTERS */

    get fecha_inicio(): Date {return this._fecha_inicio;}
    get fecha_fin(): Date {return this._fecha_fin;}
    get alumnos(): Alumno[] {return this._alumnos;}
    get num_horas(): number {return this._num_horas;}

    /* MÉTODOS */

    public num_sesiones(): number{
        let sesiones: number = 0;
        let fechaAux = new Date(this.fecha_inicio);

        while(fechaAux <= this.fecha_fin){
            if(!this.es_finde(fechaAux)){
                sesiones++;
            }
            fechaAux.setDate(fechaAux.getDate() + 1);
        }
        return sesiones;
    }

    private es_finde(fecha: Date): boolean {
        const dia: number = fecha.getDay();
        return dia === 0 || dia === 6;
    }

}
