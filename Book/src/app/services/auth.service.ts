import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupUser } from '../signup';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: any;

  //url='http://localhost:4201/register';
  //loginUrl='http://localhost:4201/login';

  constructor(private httpClient: HttpClient) { }


// getUser(): Observable<Array<SignupUser>> {
//   return this.httpClient.get<Array<SignupUser>>('http://localhost:3000/Users');
// }
editProfile(emailId:String){
  return this.httpClient.get('http://localhost:8087/get/'+emailId);
}
// addUser(newUser: SignupUser): Observable<SignupUser> {
//   return this.httpClient.post<SignupUser>('http://localhost:3000/Users', newUser);
// }

addUser(newUser:any) {
  return this.httpClient.post('http://localhost:8087/register', newUser);
}

updateregister(user) {
  return this.httpClient.put('http://localhost:8087/update',user);
}

}
