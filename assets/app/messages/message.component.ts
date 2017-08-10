import {Component, Input} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'gs-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }

        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent {
    @Input() message: Message;
    //@Output() editMessage = new EventEmitter<string>();

    constructor(private messageService: MessageService){}

    onEdit(){
        //this.editMessage.emit('This is the edited test message.');
        this.messageService.editMessage(this.message);
    }
    onDelete(){
        this.messageService.deleteMessage(this.message)
            .subscribe(
                result => console.log(result),
                err => console.log(err)
            );
    }
    belongsToUser(){
        return sessionStorage.getItem('userId') == this.message.userId;
    }
}