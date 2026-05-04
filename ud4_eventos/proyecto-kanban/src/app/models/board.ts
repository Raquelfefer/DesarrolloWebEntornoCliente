import {Column} from './column';

export class Board {

    constructor(
        public id: number,
        public nombre: string,
        public imagenFondo: string,
        public columnas: Column[] = [
            new Column(1,'Por hacer'),
            new Column(2, 'En proceso'),
            new Column(3, 'Realizado')
        ]
    ){}
}
