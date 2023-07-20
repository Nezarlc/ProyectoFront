import { Component } from '@angular/core';
import { FormGroup, FormControl  } from '@angular/forms';
import { Injectable, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    formulario: FormGroup;

    userService = inject(UsersService);

    constructor(private router: Router) {

      this.formulario = new FormGroup({
        username: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        rol: new FormControl(),
        id_datos: new FormControl()
      })
    }

    async onSubmit(){

      const response = await this.userService.register(this.formulario.value);
      //console.log(response);
      this.router.navigate(['/home']);
    }

}
