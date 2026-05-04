import {Task} from './task';

export class Column {

    constructor(
        public id: number,
        public nombre: string,
        public tareas: Task[] = []
    ){}
}
