import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private baseUrls: string;

  constructor() { 
    this.baseUrls = 'http://localhost:3001/api';
  }

  token_validacion?: string;
  
  
  private httpOptions = {
    
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token') ?? '' // Agrega el token en la cabecera como 'Bearer <tu_token>'
    })
  };

  register(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrls}/users/registro`, formValue)
    )
  }

  login(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrls}/users/login`, formValue)
    )
  }

  validateToken(){
   
    return firstValueFrom(      
      this.httpClient.post<any>(`${this.baseUrls}/users/validate`,this.httpOptions)
    )
  }

  getUserData(){


  }
}
