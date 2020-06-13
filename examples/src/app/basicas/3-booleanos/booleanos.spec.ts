import { notaMaxima } from './booleanos';

describe('3. Pruebas de booleanos', () => {

    it('notaMaxima: Debe retornar true si la nota es menor o igual a 10', () => {
        const resp = notaMaxima(10);
        expect(resp).toBeTruthy();
    });

    it('notaMaxima: Debe retornar falso si la nota es mayor o igual a 10', () => {
        const resp = notaMaxima(12);
        expect(resp).toBeFalsy();
    });

});
