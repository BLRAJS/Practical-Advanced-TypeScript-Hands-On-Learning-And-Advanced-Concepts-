interface Notification {
    send(message: string): void;
}

class EmailNotification implements Notification {
    public send(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

class SlackNotification {
    public sendMessage(text: string): void {
        console.log(`Sending Slack message: ${text}`);
    }
}

class SlackNotificationAdapter implements Notification {
    private slackNotification = new SlackNotification();

    public send(message: string): void {
        this.slackNotification.sendMessage(message);
    }
}

const emailNotification = new EmailNotification();
emailNotification.send("Hello, world!"); // Output: "Sending email: Hello, world!"

const slackNotification = new SlackNotificationAdapter();
slackNotification.send("Hello, world!"); // Output: "Sending Slack message: Hello, world!"
