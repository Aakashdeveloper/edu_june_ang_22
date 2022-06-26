import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,
         Validators, AbstractControl, Form} from '@angular/forms'

@Component({
    templateUrl:'./employee.component.html'
})

export class EmployeeFormComponent implements OnInit {

    employeeForm: FormGroup;

    constructor(private fb: FormBuilder){}

    ngOnInit(){
        this.employeeForm = this.fb.group({
            firstName:['',[Validators.required,Validators.minLength(3)]]
        })
    }
}

