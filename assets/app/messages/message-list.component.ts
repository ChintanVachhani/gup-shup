import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'gs-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <gs-message
                    [message]="message"
                    (editMessage)="message.content = $event"
                    *ngFor="let message of messages"></gs-message>
        </div>
    `
})
export class MessageListComponent implements OnInit{
    messages: Message[];

    constructor(private messageService: MessageService){}

    ngOnInit(){
        this.messages = this.messageService.getMessages();
    }
}