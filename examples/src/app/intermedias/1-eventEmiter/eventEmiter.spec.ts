import { Persona } from './eventEmiter';

describe('1. Pruebas de EventEmitter', () => {

    let persona: Persona;

    beforeEach(() => {
        persona = new Persona('Jonathan');
    });

    it('cambiarNombre: Se debe emitir un evento con el nuevo nombre', () => {
        
    });

    it('saludar: Se deve emitir un evento de saludo con el nombre enviado', () => {
        
    });

});
