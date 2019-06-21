import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from './_helpers/must-match.validator';

@Component({

    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            surname: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            phone: [null, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)],
            pet: ['', Validators.required],
            city: ['', Validators.required],
            street: ['', Validators.required],
            building: ['', Validators.required],
            flatNo: ['', Validators.pattern('[0-9]+')],
            newsletter: ['', Validators.required],
            sms: [''],
            password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
            confirmPassword: ['', Validators.required]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }


    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        alert( JSON.stringify(this.registerForm.value) );
    }
}
