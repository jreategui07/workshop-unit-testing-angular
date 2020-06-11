import { Acumulador } from './clases';

describe('5. Pruebas de clases', () => {

    let acumulador: Acumulador;

    beforeAll(() => {
        // antes de todas las pruebas
    });

    beforeEach(() => {
        // antes de cada prueba
        acumulador = new Acumulador();
    });

    afterAll(() => {
        // después de todas las pruebas
    });

    afterEach(() => {
        // después de cada prueba
    });

    it('aumentar: Debe aumentar en uno el acumulador', () => {
        acumulador.aumentar();
        expect(acumulador.acumulado).toBe(51);
    });

    it('decrementar: Debe decrementar en uno el acumulador', () => {
        acumulador.decrementar();
        expect(acumulador.acumulado).toBe(49);
    });

});
