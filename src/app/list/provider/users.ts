import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { User } from '../user';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserProvider {

    // Set the base URL
    private url: string = 'http://localhost:3000/api/users';

    constructor(public http: HttpClient) { }

    public getUser(id: string): Observable<User> {
        return this.http.get<User>(this.url + `/${id}`);
    }

    public getUsers(): Observable<User> {
        return this.http.get<User>(this.url);
    }

    // public createUser(user: User): Observable<User> {
    //     return this.http.post<User>(this.url, user, httpOptions);
    // }

    // public updateUser() {
    //     console.log('Update User');
    // }

    // public deleteUser() {
    //     console.log('Delete User');
    // }
}