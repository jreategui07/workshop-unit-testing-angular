import { RegistroUsuario } from './formularios';

describe('2. Pruebas de formularios', () => {

    let componente: RegistroUsuario;

    beforeAll(() => {
        componente = new RegistroUsuario();
    });

    it('Se debe crear un formulario con tres campos', () => {
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();
        expect(componente.form.contains('aceptarCondiciones')).toBeTruthy();
    });

    it('El control email debe ser requerido y tener formato de un correo válido', () => {
        const control = componente.email;
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El control email tener formato de un correo válido', () => {
        const control = componente.email;
        control.setValue('jonathan@gmail.com');
        expect(control.valid).toBeTruthy();
    });

    it('El control password debe ser requerido', () => {
        const control = componente.password;
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El control aceptarCondiciones debe ser requerido', () => {
        const control = componente.aceptarCondiciones;
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El valor de aceptoCondiciones debe ser true', () => {
        componente.aceptarCondicionesChange(true);
        expect(componente.aceptoCondiciones).toBeTruthy();
    });

    it('El valor de aceptoCondiciones debe ser false', () => {
        componente.aceptarCondicionesChange(false);
        expect(componente.aceptoCondiciones).toBeFalsy();
    });

});
