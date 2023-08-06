import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit(): void {

  }

  signup(form: any) {
    console.log(form)
    const email = form.value.email;
    const password = form.value.password;
    const cnfpassword = form.value.confirm_password;
    if (password === cnfpassword && form.valid) {
      this.auth.signUp(email, password).subscribe(res => {
        this.route.navigate([''])
      })
    }
  }
  
  login(form: any) {
    const email = form.value.email;
    const password = form.value.password;
    if (form.status == "VALID") {
      this.auth.onLogin(email, password).subscribe(res => {
        this.route.navigate([''])
      })
    }
  }
}
