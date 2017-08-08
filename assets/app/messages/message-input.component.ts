import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'gs-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: MessageService) {}

    onSubmit(inputMessageForm: NgForm) {
        if (this.message) {
            //Edit Message
            this.message.content = inputMessageForm.value.content;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result),
                    err => console.error(err),
                );
            this.message = null;
        } else {
            //Create Message
            const message = new Message(inputMessageForm.value.content, 'Chintan');
            this.messageService.addMessage(message)
                .subscribe(
                    result => console.log(result),
                    err => console.error(err),
                );
        }
        inputMessageForm.resetForm();
    }

    onClear(inputMessageForm: NgForm) {
        this.message = null;
        inputMessageForm.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }
}