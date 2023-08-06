import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:Boolean = false;
  username:String = ''
  constructor(private http:HttpClient) { }

  login(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }
  isAuthenticated(){
    return this.loggedIn;
  }
  signUp(email, password){
   return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.AUTH_KEY}`,{
      email:email,
      password:password,
      returnSecureToken: true
    });
  }

  onLogin(email, password){
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.AUTH_KEY}`,{
      email:email,
      password:password,
      returnSecureToken: true
    })
 
  }


}