import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean = false;
  username:String = ''
  constructor(private http:HttpClient) { }
  @Output() userLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>(); 

  login(){
    this.loggedIn = true;
  }
  logOut(){
    this.loggedIn = false;
  }
  isAuthenticated(){
    this.userLoggedIn.emit(this.loggedIn)
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