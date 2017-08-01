import {Component} from "@angular/core";

@Component({
    selector: 'gs-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger btn-sm" (click)="onLogout()">Logout</button>
        </div>
    `
})
export class LogoutComponent {
    onLogout() {

    }
}