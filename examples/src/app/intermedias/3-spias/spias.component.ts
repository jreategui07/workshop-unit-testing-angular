import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { IUsuarios } from './usuarios.interface';

@Component({
  selector: 'app-spias',
  template: `
    <p>
      spias works!
    </p>
  `,
  styles: []
})
export class SpiasComponent implements OnInit {

  usuarios: IUsuarios[];
  error: string;

  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void { }

  obtenerUsuarios(): void {
    this.usuariosService.getUsuarios().subscribe(
      (usuarios: IUsuarios[]) => {
        this.usuarios = usuarios;
      },
      (error: string) => {
        this.error = error;
      }
    );
  }

}
