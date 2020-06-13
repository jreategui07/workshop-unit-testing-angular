import { EventEmitter } from '@angular/core';

export class Persona {

    nombre: string;
    nuevoNombre = new EventEmitter<string>();
    saludo = new EventEmitter<string>();

    constructor(nombre) {
        this.nombre = nombre;
    }

    cambiarNombre(nombre: string): void {
        this.nombre = nombre;
        this.nuevoNombre.emit(this.nombre);
    }

    saludar(nombre: string): void {
        this.saludo.emit(`Hola ${ nombre }`);
    }

}
