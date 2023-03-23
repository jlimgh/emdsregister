import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { PostResponse } from '../models/post-response';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url = 'https://localhost:7089/api/Registration';
  
  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<PostResponse> {
    console.log('user details: ', user);
    return this.httpClient.post(`${this.url}`, user, { responseType: 'json' });
  }
}
