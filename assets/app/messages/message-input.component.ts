import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'gs-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent {
    constructor(private messageService: MessageService) {}

    onSubmit(inputMessageForm: NgForm) {
        const message = new Message(inputMessageForm.value.content, 'Chintan');
        this.messageService.addMessage(message);
        inputMessageForm.resetForm();
    }
}