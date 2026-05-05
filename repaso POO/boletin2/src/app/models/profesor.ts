export class Profesor {

    constructor(
        private _dni: string,
        private _nombre: string,
        private _apellidos: string,
        private _telefono: string,
        private _salarioBruto: number
    ){}

    get dni(): string {return this._dni};
    get nombre(): string {return this._nombre};
    get apellidos(): string {return this._apellidos};
    get telefono(): string {return this._telefono};
    get salarioBruto(): number {return this._salarioBruto};

    public getSalarioNeto(irpf: number): number{
        // Asumiendo que irpf es un porcentaje (ej: 0.21)
        let salarioNeto: number = this._salarioBruto * (1 - irpf);
        return salarioNeto;
    }
}
