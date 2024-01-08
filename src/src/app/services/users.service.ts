import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserCreateDto, IUserDetailsDto } from '../state/user/user.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  createUser(user: IUserCreateDto): Observable<IUserDetailsDto> {
    return this.http.post<IUserDetailsDto>(
      'https://localhost:7004/api/users',
      user
    );
  }

  resolveUser(userId: string): Observable<IUserDetailsDto> {
    return this.http.get<IUserDetailsDto>(
      `https://localhost:7004/api/users/${userId}`
    );
  }
}
