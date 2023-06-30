type Listener<T> = (data: T) => void;

class EventEmitter<T extends Record<string, any>> {
    private listeners: Record<keyof T, Listener<any>[]> = {} as Record<keyof T, Listener<any>[]>;

    addEventListener<K extends keyof T>(event: K, listener: Listener<T[K]>): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(listener);
    }

    removeEventListener<K extends keyof T>(event: K, listener: Listener<T[K]>): void {
        if (!this.listeners[event]) {
            return;
        }

        this.listeners[event] = this.listeners[event].filter((l) => l !== listener);
    }

    emit<K extends keyof T>(event: K, data: T[K]): void {
        if (!this.listeners[event]) {
            return;
        }

        this.listeners[event].forEach((listener) => listener(data));
    }
}

function event<K extends string>(name: K) {
    return function <T extends Record<string, any>>(target: EventEmitter<T>, propertyKey: string) {
        if (!target[propertyKey]) {
            target[propertyKey] = new EventEmitter<T>();
        }

        const emitter = target[propertyKey] as EventEmitter<T>;

        if (!emitter.listeners[name]) {
            emitter.listeners[name] = [];
        }

        const originalMethod = target[propertyKey][name];

        target[propertyKey][name] = function (this: EventEmitter<T>, data: T[K]) {
            originalMethod.apply(this, [data]);
            this.emit(name, data);
        };
    };
}

// usage
class MyComponent {
    @event('onButtonClick')
    onClick(data: { buttonId: string }) {
        console.log(`Button clicked: ${data.buttonId}`);
    }
}

const myComponent = new MyComponent();
myComponent.onClick.addEventListener('onButtonClick', (data) => console.log(data.buttonId));
myComponent.onClick.emit('onButtonClick', { buttonId: 'myButton' });
