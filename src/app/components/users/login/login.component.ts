import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  showError: boolean = false;

  userService = inject(UsersService);

  constructor(private router: Router) {

    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    })
  }

  async onSubmit(){

    const response = await this.userService.login(this.formulario.value);
    console.log(response.token);
    
    if(response.token){
      this.router.navigate(['/home']);
    }else{
      this.showError = true;
    }
    
  }

}
