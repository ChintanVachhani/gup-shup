import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'gs-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;

    onSubmit() {
        console.log(this.signinForm);
        this.signinForm.reset();
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        });
    }
}