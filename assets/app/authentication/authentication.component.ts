import {Component} from "@angular/core";
import {AuthenticationService} from "./authentication.service";

@Component({
    selector: 'gs-authentication',
    templateUrl: './authentication.component.html'
})
export class AuthenticationComponent {
    constructor(private authenticationService: AuthenticationService){}

    isLoggedIn(){
        return this.authenticationService.isLoggedIn();
    }
}