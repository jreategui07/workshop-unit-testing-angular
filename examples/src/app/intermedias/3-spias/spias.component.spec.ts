import { SpiasComponent } from './spias.component';
import { UsuariosService } from './usuarios.service';

describe('SpiasComponent', () => {

  let componente: SpiasComponent;
  const servicio = new UsuariosService(null);

  beforeEach(() => {
    componente = new SpiasComponent(servicio);
  });

});
