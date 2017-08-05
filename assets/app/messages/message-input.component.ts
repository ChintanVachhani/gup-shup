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
        this.messageService.addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.error(error),
            );
        inputMessageForm.resetForm();
    }
}