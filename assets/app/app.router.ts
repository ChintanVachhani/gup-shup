import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {AUTHENTICATION_ROUTES} from "./authentication/authentication.router";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'authentication', component: AuthenticationComponent, children: AUTHENTICATION_ROUTES}
];

export const CustomRouterModule = RouterModule.forRoot(APP_ROUTES);