import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  authenticateLogin(newUser:any) {
    return this.httpClient.post('http://localhost:8087/login', newUser);
  }
  //storing the token in local storage
  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }
  // getting token from localstorage
  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }
  setUserId(userId) {
    localStorage.setItem('userId', userId);
  }
 
  getUserId(): string {
    // console.log('getting bear token ' + sessionStorage.getItem('authToken'));
     return localStorage.getItem('userId');
    }
    loggedIn(){
     return localStorage.getItem('bearerToken');
    }
 // checks the token is authorized and if it is true it allows to do further process
// isUserAuthenticated(token): Promise<boolean> {
//   return this.httpClient.post('http://localhost:8086/login', {}, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   }).map((data) => data['isAuthenticated'])
//     .toPromise();
// }
}

