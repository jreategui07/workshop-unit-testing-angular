import { Persona } from './eventEmiter';

describe('1. Pruebas de EventEmitter', () => {

    let persona: Persona;

    beforeEach(() => {
        persona = new Persona('Jonathan');
    });

    it('cambiarNombre: Se debe emitir un evento con el nuevo nombre', () => {
        let nuevoNombre = '';
        persona.nuevoNombre.subscribe(resp => {
            nuevoNombre = resp;
        });
        persona.cambiarNombre('Mario');
        expect(nuevoNombre).toBe('Mario');
    });

    it('saludar: Se deve emitir un evento de saludo con el nombre enviado', () => {
        let saludo = '';
        persona.saludo.subscribe(resp => {
            saludo = resp;
        });
        persona.saludar('Jonathan');
        expect(saludo).toContain('Jonathan');
    });

});
