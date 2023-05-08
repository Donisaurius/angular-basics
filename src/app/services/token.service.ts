// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { enviroment } from 'src/enviroments/enviroments';
// import { CreateUserDTO, User } from '../models/user.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class UsersService {
//   private apiUrl = `${enviroment.API_URL}/api/auth`;

//   constructor(private http: HttpClient) {}

//   login(email: string, password: string) {
//     return this.http.post(`${this.apiUrl}/login`, { email, password });
//   }

//   profile() {
//     return this.http.get(`${this.apiUrl}/profile`);
//   }
// }
