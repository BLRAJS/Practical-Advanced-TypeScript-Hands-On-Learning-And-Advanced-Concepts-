type ChatMessage = {
    sender: string;
    message: string;
    timestamp: number;
};

class ChatMessageStream {
    private messages: ChatMessage[] = [];
    private listeners: ((message: ChatMessage) => void)[] = [];

    addMessage(sender: string, message: string) {
        const timestamp = Date.now();
        const chatMessage: ChatMessage = { sender, message, timestamp };
        this.messages.push(chatMessage);
        this.notifyListeners(chatMessage);
    }

    private notifyListeners(message: ChatMessage) {
        for (const listener of this.listeners) {
            listener(message);
        }
    }

    async *[Symbol.asyncIterator](): AsyncIterableIterator<ChatMessage> {
        let currentIndex = 0;
        while (true) {
            if (currentIndex < this.messages.length) {
                yield this.messages[currentIndex++];
            } else {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }
    }

    addListener(listener: (message: ChatMessage) => void) {
        this.listeners.push(listener);
    }
}

// Example usage:

async function main() {
    const chatMessageStream = new ChatMessageStream();

    chatMessageStream.addListener((message) => {
        console.log(`New message from ${message.sender}: ${message.message}`);
    });

    chatMessageStream.addMessage("Alice", "Hello, world!");
    chatMessageStream.addMessage("Bob", "Hi, Alice!");
    chatMessageStream.addMessage("Charlie", "Hey, guys!");

    for await (const message of chatMessageStream) {
        console.log(`Received message: ${message.message}`);
    }
}

main();
