// Define the aspect
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };

    return descriptor;
}

// Define another aspect
function retry(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        let retries = 3;
        while (retries > 0) {
            try {
                const result = await originalMethod.apply(this, args);
                return result;
            } catch (error) {
                console.log(`Error calling ${key}: ${error}`);
                retries--;
            }
        }
        throw new Error(`Failed to call ${key} after 3 retries`);
    };

    return descriptor;
}

// Define the chat service
class ChatService {
    @log
    @retry
    async sendMessage(message: string, recipient: string): Promise<void> {
        // Send the message to the recipient
        const response = await fetch("/api/send-message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message, recipient }),
        });

        if (!response.ok) {
            throw new Error(`Failed to send message: ${response.status}`);
        }
    }
}

// Usage
const chatService = new ChatService();
chatService.sendMessage("Hello", "jane.doe").catch(console.error);
