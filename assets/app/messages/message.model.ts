export class Message {
    /*content: string;
    userName: string;
    messageId?: string;
    userId?: string;

    constructor(content: string, userName: string, messageId?: string, userId?: string) {
        this.content = content;
        this.userName = userName;
        this.messageId = messageId;
        this.userId = userId;
    }*/

    //Equivalent to the above commented piece of code
    constructor(public content: string,
                public userName?: string,
                public messageId?: string,
                public userId?: string) {}
}