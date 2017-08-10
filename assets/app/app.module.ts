import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {MessageComponent} from "./messages/message.component";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {HeaderComponent} from "./shared/header.component";
import {CustomRouterModule} from "./app.router";
import {LogoutComponent} from "./authentication/logout.component";
import {SignupComponent} from "./authentication/signup.component";
import {SigninComponent} from "./authentication/signin.component";
import {HttpModule} from "@angular/http";
import {AuthenticationService} from "./authentication/authentication.service";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [BrowserModule, FormsModule, CustomRouterModule, ReactiveFormsModule, HttpModule],
    providers: [AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule {

}