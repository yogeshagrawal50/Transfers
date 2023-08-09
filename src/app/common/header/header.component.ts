import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthService) { }
  isloggedin : Boolean = false;
  @Input()username:string
  ngOnInit(): void {
    this.auth.isAuthenticated()
     console.log(this.isloggedin)
  }
  

}
