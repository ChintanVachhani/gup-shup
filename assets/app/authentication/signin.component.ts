import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'gs-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
    signinForm: FormGroup;

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    onSubmit() {
        const user = new User(this.signinForm.value.email, this.signinForm.value.password);
        this.authenticationService.signin(user)
            .subscribe(
                result => {
                    sessionStorage.setItem('token', result.token);
                    sessionStorage.setItem('userId', result.userId);
                    this.router.navigateByUrl('/');
                },
                err => console.log(err)
            );
        this.signinForm.reset();
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        });
    }
}