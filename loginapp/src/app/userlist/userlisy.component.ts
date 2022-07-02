import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlisy',
  templateUrl: './userlisy.component.html'
})
export class UserlistComponent implements OnInit {

  userList:any[] = []

  constructor(private userService : UserService,
    private router: Router){}


  ngOnInit(): void {
    this.userService.userList()
      .subscribe((res:any[]) => this.userList = res)
  }

  logoutUser():void{
    localStorage.removeItem('Token_Number');
    localStorage.removeItem('Role_Type');
    this.router.navigate(['/login'])
  }
}
