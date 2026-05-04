import {User} from './user';

export class Task {

    constructor(
        public id: number,
        public titulo: string,
        public descripcion: string,
        public estimacionHoras: number,
        public usuario: User | null, //Puede que no tenga asignado usuario al principio
        public columnaId: string //Saber en que columna esta
    ){}

}
