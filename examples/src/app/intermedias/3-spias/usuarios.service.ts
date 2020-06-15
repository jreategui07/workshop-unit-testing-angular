import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUsuarios } from './usuarios.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    public http: HttpClient
  ) { }

  getUsuarios() {
    return this.http.get('___url___').pipe(
      map(resp => {
        const usuarios: IUsuarios[] = [];
        return usuarios;
        })
    );
  }

}
