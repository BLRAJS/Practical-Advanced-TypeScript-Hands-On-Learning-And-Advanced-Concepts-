interface EventMap {
    [event: string]: (...args: any[]) => void;
}

class TypedEventEmitter<T extends EventMap> {
    private listeners: { [K in keyof T]?: Array<T[K]> } = {};

    on<K extends keyof T>(event: K, listener: T[K]): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event]!.push(listener);
    }

    emit<K extends keyof T>(event: K, ...args: Parameters<T[K]>): void {
        const listeners = this.listeners[event];
        if (!listeners) return;

        for (const listener of listeners) {
            listener(...args);
        }
    }
}

// Usage
interface MyEvents {
    textReceived: (text: string) => void;
    dataUpdated: (data: number[]) => void;
}

const eventEmitter = new TypedEventEmitter<MyEvents>();

eventEmitter.on("textReceived", (text) => {
    console.log("Text received:", text);
});

eventEmitter.on("dataUpdated", (data) => {
    console.log("Data updated:", data);
});

eventEmitter.emit("textReceived", "Hello, world!");
eventEmitter.emit("dataUpdated", [1, 2, 3]);
