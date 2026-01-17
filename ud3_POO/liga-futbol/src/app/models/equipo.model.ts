export class Jugador {
    
    constructor(
        private _id: number,
        private _nombre: string,
        private _posicion: string,
        private _dorsal: number
    ){}

    // Getters
    get id(): number { return this._id; }
    get nombre(): string { return this._nombre; }
    get posicion(): string { return this._posicion; }
    get dorsal(): number { return this._dorsal; }

    // Setters
    set id(id: number) { this._id = id; }
    set nombre(nombre: string) { this._nombre = nombre; }
    set posicion(posicion: string) { this._posicion = posicion; }
    set dorsal(dorsal: number) { this._dorsal = dorsal; }
}

export class Equipo {

    constructor(
        private _id: string,
        private _nombre: string,
        private _puntos: number,
        private _partidosJugados: number,
        private _partidosGanados: number,
        private _partidosEmpatados: number,
        private _partidosPerdidos: number,
        private _golesFavor: number,
        private _golesContra: number,
        private _diferenciaGoles: number,
        private _ultimos5: string[],
        private _urlEscudo: string,
        private _jugadores: Jugador[] = [] 
    ) {}

    // Getters 
    get id(): string { return this._id; }
    get nombre(): string { return this._nombre; }
    get puntos(): number { return this._puntos; }
    get partidosJugados(): number { return this._partidosJugados; }
    get partidosGanados(): number { return this._partidosGanados; }
    get partidosEmpatados(): number { return this._partidosEmpatados; }
    get partidosPerdidos(): number { return this._partidosPerdidos; }
    get golesFavor(): number { return this._golesFavor; }
    get golesContra(): number { return this._golesContra; }
    get diferenciaGoles(): number { return this._diferenciaGoles; }
    get ultimos5(): string[] { return this._ultimos5; }
    get urlEscudo(): string { return this._urlEscudo; }
    get jugadores(): Jugador[] { return this._jugadores; }

    //Lógica para el equipo
    public actualizarEstadistica(golesFavor: number, golesContra: number):void{
        this._partidosJugados++;
        this._golesFavor += golesFavor;
        this._golesContra += golesContra;
        this._diferenciaGoles = this._golesFavor - this._golesContra;

        let resultado = '';

        if (golesFavor > golesContra) {
        this._puntos += 3;
        this._partidosGanados++;
        resultado = 'G';
        } else if (golesFavor === golesContra) {
        this._puntos += 1;
        this._partidosEmpatados++;
        resultado = 'E';
        } else {
        this._partidosPerdidos++;
        resultado = 'P';
        }   

        if(this._ultimos5.length >= 5){
            this._ultimos5.shift(); //Elimina el primer elemento del array
        }
        this._ultimos5.push(resultado); //Añade en última posición el elemento resultado
    }



}