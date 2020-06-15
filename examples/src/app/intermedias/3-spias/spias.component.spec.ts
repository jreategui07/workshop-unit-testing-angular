import { SpiasComponent } from './spias.component';
import { UsuariosService } from './usuarios.service';
import { IUsuarios } from './usuarios.interface';
import { Observable } from 'rxjs';

describe('3. Pruebas de spias', () => {

  let componente: SpiasComponent;
  const servicio = new UsuariosService(null);

  let fakeResp: IUsuarios[];
  let fakeError: string;

  beforeAll(() => {
    // inicializamos el componente antes que todas las pruebas
    componente = new SpiasComponent(servicio);
    // respuesta fake del llamado a getUsuarios
    fakeResp = [
      { id: 1, nombre: 'Jonathan' },
      { id: 2, nombre: 'María' }
    ];
    // respuesta de error fakedel llamado a getUsuarios
    fakeError = 'Ha ocurrido un error';
  });

  /*
    Pruebas de espias con returnValue
  */

  it('obtenerUsuarios[returnValue]: Se deben obtener los usuarios', () => {
    
  });

  it('obtenerUsuarios[returnValue]: Se debe obtener un mensaje de error si el servicio falla', () => {
    
  });

  /*
    Fin de pruebas de espias con returnValue
  */

  /*
    Pruebas de espias con callFake
  */

  it('obtenerUsuarios[callFake]: Se deben obtener los usuarios', () => {
    
  });

  it('obtenerUsuarios[callFake]:  Se debe obtener un mensaje de error si el servicio falla', () => {
    
  });

  /*
    Fin de pruebas de espias con callFake
  */

});
