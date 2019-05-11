import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

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
    const formData: FormData = new FormData();

    formData.append('password', password);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);

    return this.http.post<void>('/user/auth/local/register', formData);
  }

}
