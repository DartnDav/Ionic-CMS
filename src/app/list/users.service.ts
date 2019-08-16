import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsersService {

  //Set up the URL

  private url: string;

  constructor(private http: HttpClient) {
    let l = window.location;
    let host: string;

    if (l.port >= '8100') {
      host = 'localhost:3000';
    } else {
      host = l.hostname + ((l.port.length > 0) ? ':' + l.port : '');
    }

    this.url = `${l.protocol}//${host}/api/users/`;
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  users(): Observable<User> {
    return this.http.get<User>(this.url);
  }
  create(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions);
  }
  user(id: string): Observable<User> {
    return this.http.get<User>(this.url + id);
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions);
  }
  edit(user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions);
  }
  editUser(user: User): Observable<User> {
    return this.http.put<User>(this.url, user, httpOptions);
  }
  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }
}


//   deleteUser (id: string): Observable<User> {
//     return this.http.delete<User>(`${this.url}/${id}`);
//   }

// }