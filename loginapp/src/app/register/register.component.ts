import {Component} from '@angular/core';
import { IRegister } from './register.model';
import { NgForm } from '@angular/forms';
import { RegsiterService } from './register.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent {

    constructor(private regsiterService : RegsiterService,
            private router: Router){}


    myEmployee = new IRegister('John','a@a.com','12345678',9876542414);
    
    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.regsiterService.registerEmp(Form.value)
             .subscribe((res:any[]) => {console.log('Data Posted',res)}) 
        this.router.navigate(['/login'])       
    }

}