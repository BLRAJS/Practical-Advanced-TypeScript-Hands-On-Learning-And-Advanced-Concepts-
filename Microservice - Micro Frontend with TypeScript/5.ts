export interface EventBusEvent<T> {
    type: string;
    payload: T;
}

export class EventBus {
    private listeners: { [type: string]: Array<(event: EventBusEvent<any>) => void> } = {};

    public addListener<T>(type: string, callback: (event: EventBusEvent<T>) => void): void {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }

    public removeListener<T>(type: string, callback: (event: EventBusEvent<T>) => void): void {
        if (!this.listeners[type]) return;

        this.listeners[type] = this.listeners[type].filter(
            (listener) => listener !== callback
        );
    }

    public dispatch<T>(event: EventBusEvent<T>): void {
        const { type } = event;

        if (!this.listeners[type]) return;

        this.listeners[type].forEach((callback) => callback(event));
    }
}
