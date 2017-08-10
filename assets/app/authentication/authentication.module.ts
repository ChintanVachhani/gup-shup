import {NgModule} from "@angular/core";
import {LogoutComponent} from "./logout.component";
import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthenticationRouterModule} from "./authentication.router";

@NgModule({
    declarations: [
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthenticationRouterModule
    ]
})
export class AuthenticationModule{

}