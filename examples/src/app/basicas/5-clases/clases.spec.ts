import { Contador } from './clases';

describe('5. Pruebas de clases', () => {

    let contador: Contador;

    beforeAll(() => {
        // antes de todas las pruebas
    });

    beforeEach(() => {
        // antes de cada prueba
        contador = new Contador();
    });

    afterAll(() => {
        // después de todas las pruebas
    });

    afterEach(() => {
        // después de cada prueba
    });

    it('aumentar: Debe aumentar en uno el contador', () => {
        contador.aumentar();
        expect(contador.contado).toBe(51);
    });

    it('decrementar: Debe decrementar en uno el contador', () => {
        contador.decrementar();
        expect(contador.contado).toBe(49);
    });

});
