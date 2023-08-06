import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthService) { }
  isloggedin : Boolean = false;
  ngOnInit(): void {
    this.isloggedin = this.auth.loggedIn
  }

}
