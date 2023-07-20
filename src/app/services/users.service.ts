import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpClient = inject(HttpClient);
  private baseUrls: string;

  constructor() { 
    this.baseUrls = 'http://localhost:3001/api/users';
  }

  register(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrls}/registro`, formValue)
    )
  }

  login(formValue: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrls}/login`, formValue)
    )
  }

  validateToken(token: any){
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrls}/validate`, token)
    )
  }
}
