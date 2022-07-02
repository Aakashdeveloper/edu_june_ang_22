import {Component} from '@angular/core';
import { ILogin,LoginRes,UserRes } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})

export class LoginComponent {

    loginError:string = '';

    constructor(private loginService : LoginService,
            private router: Router){}


    loginForm = new ILogin('geetik@gmail.com','12345678');
    
    submitForm(Form:NgForm):void{
        this.loginService.loginEmp(Form.value)
             .subscribe(
                 (res:LoginRes) => {
                    this.loginError = ''
                    this.loginService.getUserInfo(res['token'])
                    .subscribe((response:UserRes) => 
                        this.validDateUser(response['role'])
                    )
                },
                 (err:any[]) => {
                    console.log(err)
                    this.loginError = "Please Enter Correct Details"
                }
            ) 
    }

    validDateUser(roleType:string):void{
        localStorage.setItem('Role_Type',roleType)
        this.router.navigate(['/profile'])
    }

}