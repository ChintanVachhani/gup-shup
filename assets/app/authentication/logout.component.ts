import {Component} from "@angular/core";
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Component({
    selector: 'gs-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger btn-sm" (click)="onLogout()">Logout</button>
        </div>
    `
})
export class LogoutComponent {

    constructor(private authenticationService: AuthenticationService, private router: Router){}

    onLogout() {
        this.authenticationService.logout();
        this.router.navigate(['/authentication', 'signin']);
    }
}