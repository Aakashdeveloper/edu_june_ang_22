import {Component} from '@angular/core';
import { IUser } from './forms.model';
import { NgForm } from '@angular/forms';
import { FormService } from './forms.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-form',
    templateUrl: './forms.component.html'
})

export class FormsComponent {

    constructor(private formService : FormService,
            private router: Router){}

    language: any[] = ['Node','React','Angular','JavaScript']
    myEmployee = new IUser('John','Michal','a@a.com','12345678','Node');
    hasCodeLangError : boolean = false;
   

    firstToUpper(value: string):void{
        if(value.length > 0){
            this.myEmployee.firstName = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
        }else{
            this.myEmployee.firstName = ''
        }
    }

    validateCodeLang(): void{
        if(this.myEmployee.clang === 'default'){
            this.hasCodeLangError = true
        }else{
            this.hasCodeLangError = false
        }
    }

    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.formService.postEmp(Form.value)
            .subscribe((res:any[]) => {console.log('Data Posted',res)}) 
        this.router.navigate(['/after'])       
    }

}