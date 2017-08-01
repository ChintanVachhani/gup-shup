import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./authentication/authentication.component";

const GS_ROUTES: Routes = [
    {path: '', redirectTo: '/messages', pathMatch: 'full'},
    {path: 'messages', component: MessagesComponent},
    {path: 'authentication', component: AuthenticationComponent}
];

export const CustomRouterModule = RouterModule.forRoot(GS_ROUTES);