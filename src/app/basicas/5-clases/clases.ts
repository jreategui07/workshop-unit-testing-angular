export class Acumulador {

    acumulado: number;

    constructor() {
        this.acumulado = 50;
    }

    aumentar(): void {
        this.acumulado = this.acumulado + 1;
    }

    decrementar(): void {
        this.acumulado = this.acumulado - 1;
    }

}
