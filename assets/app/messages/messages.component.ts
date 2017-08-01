import {Component} from "@angular/core";

@Component({
    selector: 'gs-messages',
    template: `
        <div class="row">
            <gs-message-input></gs-message-input>
        </div>
        <hr>
        <div class="row">
            <gs-message-list></gs-message-list>
        </div>
    `
})
export class MessagesComponent {

}