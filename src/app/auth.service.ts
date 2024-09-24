import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private baseUrl = 'http://localhost:8080/api/auth'; // Assurez-vous de mettre la bonne URL pour votre backend
  private baseUrl1 = 'http://localhost:8080/api/auth/login'; // Assurez-vous de mettre la bonne URL pour votre backend

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<any> {
    const body = { username: email, password: password };
    return this.http.post(`${this.baseUrl}/signup`, body);
  }
  login(email: string, password: string): Observable<any> {
    const body = { username: email, password: password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}
