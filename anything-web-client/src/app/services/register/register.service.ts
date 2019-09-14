import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {RegisterRequest} from '../../models/register/RegisterRequest';

@Injectable()
export class RegisterService {

  /**
   * Constructor
   * @param http HttpClient
   */
  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * Register a new user
   * @param firstName string
   * @param lastName string
   * @param email string
   * @param password string
   */
  public register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Observable<void> {
    const registerRequest: RegisterRequest = new RegisterRequest();
    registerRequest.firstName = firstName;
    registerRequest.lastName = lastName;
    registerRequest.email = email;
    registerRequest.password = password;
    return this.http.post<void>('register', registerRequest);
  }

}
