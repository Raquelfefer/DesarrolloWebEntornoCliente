import { Convenio } from "./convenio";

export class Empresa {

    /* CONSTRUCTOR */

    constructor(
        private _nombre: string,
        private _num_empleados: number,
        private _convenios: Convenio[]
    ){}

    /* GETTERS Y SETTERS */

    get nombre(): string {return this._nombre;}
    get num_empleados(): number {return this._num_empleados;}
    get convenios(): Convenio[] {return this._convenios;}

    /* MÉTODOS */

    public listado_alumnos(): string[]{
        const alumnos: string[] = this._convenios.flatMap(conv => conv.alumnos.map(a => a.nombre));
        const nombres: string[] = [...new Set(alumnos)]; 
        return nombres;
    }

    public nota_media_alumnos(): number{
        const notas_finales: number[] = this._convenios.flatMap(conv => conv.alumnos.map(a => a.nota_final));
        const numero_alumnos: number = notas_finales.length;
        const nota_media: number = notas_finales.reduce((nn , n ) => nn + n, 0)/numero_alumnos;
        
        return Math.trunc(nota_media);
    }

    public total_horas(): number{
        const horasTotales: number = this.convenios.filter(f => f.fecha_inicio < f.fecha_fin)
                                    .map(conv => conv.num_horas)
                                    .reduce((horas, h) => horas + h, 0);
        return horasTotales;
    }  
}
