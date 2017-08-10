import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {HeaderComponent} from "./shared/header.component";
import {CustomRouterModule} from "./app.router";
import {HttpModule} from "@angular/http";
import {AuthenticationService} from "./authentication/authentication.service";
import {ErrorComponent} from "./error/error.component";
import {ErrorService} from "./error/error.service";
import {MessageModule} from "./messages/message.module";

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [BrowserModule, CustomRouterModule, HttpModule, MessageModule],
    providers: [AuthenticationService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}