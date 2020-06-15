export class Contador {

    contado: number;

    constructor() {
        this.contado = 50;
    }

    aumentar(): void {
        this.contado = this.contado + 1;
    }

    decrementar(): void {
        this.contado = this.contado - 1;
    }

}
