import { FormGroup, FormControl, Validators } from '@angular/forms';

export class RegistroUsuario {

    email = new FormControl();
    password = new FormControl();
    aceptarCondiciones = new FormControl();

    form = new FormGroup({
        email: this.email,
        password: this.password,
        aceptarCondiciones: this.aceptarCondiciones
    });

    constructor() {
        this.setValidators();
    }

    setValidators() {
        this.email.setValidators([
            Validators.required,
            Validators.email
        ]);
        this.password.setValidators([
            Validators.required
        ]);
        this.aceptarCondiciones.setValidators([
            Validators.required
        ]);
    }

}
