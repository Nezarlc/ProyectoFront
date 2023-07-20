import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit{

  notLog = true;
  parametroRuta: string = '';
  parametroConsulta: string = '';


  userService = inject(UsersService);

  constructor(private route: ActivatedRoute, private router: Router) { }

  async ngOnInit(){

    this.route.params.subscribe(params => {
      this.parametroRuta = params['token']; // 'id' es el nombre del parámetro en la ruta
    });

    console.log(this.parametroRuta);
  
    const response = await this.userService.validateToken(this.parametroRuta);
    this.notLog = response;
    
  }

}
