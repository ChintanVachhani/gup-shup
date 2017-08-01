import {Component} from '@angular/core';
import {MessageService} from "./messages/message.service";

@Component({
    selector: 'gs-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {

}