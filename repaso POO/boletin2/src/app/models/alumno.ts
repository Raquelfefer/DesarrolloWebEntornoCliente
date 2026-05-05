import { Direccion } from "./direccion";

export class Alumno {

    constructor(
        private _dni: string,
        private _nombre: string,
        private _apellidos: string,
        private _fecha_nac: Date,
        private _direccion: Direccion
    ){}

    get dni(): string {return this._dni}
    get nombre(): string {return this._nombre}
    get apellidos(): string {return this._apellidos}
    get fecha_nac(): Date {return this._fecha_nac}
    get direccion(): Direccion {return this._direccion}

    set dni(dni: string) {this._dni = dni};
    set nombre(nombre: string) {this._nombre = nombre}
    set apellidos(apellidos: string) {this._apellidos = apellidos}
    set fecha_nac(fecha_nac : Date) {this._fecha_nac = fecha_nac}
    set direccion(direccion: Direccion) {this._direccion = direccion}


    public getEdadDet(): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this._fecha_nac.getFullYear();
    const mes = hoy.getMonth() - this._fecha_nac.getMonth();

    // Ajuste por si aún no ha cumplido años este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < this._fecha_nac.getDate())) {
        edad--;
    }
    return edad;
}

    public getIniciales(): string{
        const inicialNombre: string = this._nombre.charAt(0);
        const inicialesApellidos: string = this._apellidos.split(' ')
                                            .map(a => a.charAt(0))
                                            .join('');
        return inicialNombre + inicialesApellidos;
    }
}
