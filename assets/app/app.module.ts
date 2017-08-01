import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {MessageComponent} from "./messages/message.component";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {FormsModule} from "@angular/forms";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {HeaderComponent} from "./shared/header.component";
import {CustomRouterModule} from "./app.router";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent
    ],
    imports: [BrowserModule, FormsModule, CustomRouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}