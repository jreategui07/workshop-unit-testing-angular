import * as f from './numeros';

describe('2. Pruebas de numeros', () => {

    it('sumar: Debe retornar la suma de los dos números enviados', () => {
        const resp = f.sumar(1, 2);
        expect(resp).toBe(3);
    });

    it('incrementar: Debe retornar incrementado en 1 el número enviado', () => {
       const resp = f.incrementar(1);
       expect(resp).toBe(2);
    });

});
