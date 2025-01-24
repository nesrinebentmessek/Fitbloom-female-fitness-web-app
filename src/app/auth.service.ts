import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    console.log(user);
    return this.http.post(`${this.baseUrl}/register`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  login(credentials: { email: string; mdp: string }) {
   
    //console.log('email tawa:', credentials.email);
    //console.log('password tawa:', credentials.mdp);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:3000/api/login', credentials, { headers });
  }
  
  sendEmail(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(`${this.baseUrl}/send-email`, data, { headers });
  }
}
