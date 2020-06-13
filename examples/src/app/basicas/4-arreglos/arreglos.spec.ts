import { colores } from './arreglos';

describe('4. Pruebas de arreglos', () => {

    it('colores: Debe retornar un arreglo de al menos 3 posiciones', () => {
        const resp = colores();
        expect(resp.length).toBeGreaterThanOrEqual(3);
    });

    it('colores: Debe contener el color rojo', () => {
        const resp = colores();
        expect(resp).toContain('rojo');
    });

    it('colores: Debe retornar un arreglo con el color enviado', () => {
        const color = 'amarillo';
        const resp = colores(color);
        expect(resp).toContain(color);
    });

});
