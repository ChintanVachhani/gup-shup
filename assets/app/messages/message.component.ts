import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Message} from "./message.model";

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
    @Output() editMessage = new EventEmitter<string>();
    onEdit(){
        this.editMessage.emit('This is the edited test message.');
    }
}