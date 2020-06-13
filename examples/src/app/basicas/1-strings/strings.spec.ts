import { saludo } from './strings';

describe('1. Pruebas de string', () => {

    it('El typeof debe ser string', () => {
        const resp = saludo('Jonathan');
        expect(typeof resp).toBe('string');
    });

    it('La respuesta debe contener el nombre enviado', () => {
        const resp = saludo('Jonathan');
        expect(resp).toContain(resp);
    });

});
