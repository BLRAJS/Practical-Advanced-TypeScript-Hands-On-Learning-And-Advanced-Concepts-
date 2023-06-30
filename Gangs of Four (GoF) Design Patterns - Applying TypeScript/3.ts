interface Observer<T> {
    update(data: T): void;
}

class Subject<T> {
    private observers: Observer<T>[] = [];

    public registerObserver(observer: Observer<T>): void {
        this.observers.push(observer);
    }

    public unregisterObserver(observer: Observer<T>): void {
        const index = this.observers.indexOf(observer);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers(data: T): void {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }
}

class StockPrice {
    private subject = new Subject<number>();
    private price = 0;

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
        this.subject.notifyObservers(price);
    }

    public addObserver(observer: Observer<number>): void {
        this.subject.registerObserver(observer);
    }

    public removeObserver(observer: Observer<number>): void {
        this.subject.unregisterObserver(observer);
    }
}

class StockPriceDisplay implements Observer<number> {
    private element: HTMLElement;

    constructor(elementId: string) {
        this.element = document.getElementById(elementId);
    }

    public update(price: number): void {
        this.element.innerText = price.toFixed(2);
    }
}

const stockPrice = new StockPrice();
const stockPriceDisplay1 = new StockPriceDisplay("price-display-1");
const stockPriceDisplay2 = new StockPriceDisplay("price-display-2");

stockPrice.addObserver(stockPriceDisplay1);
stockPrice.addObserver(stockPriceDisplay2);

stockPrice.setPrice(100.00); // Updates both StockPriceDisplay elements with the new price
