abstract class Pizza {
    public abstract getPrice(): number;
    public abstract getDescription(): string;
}

class MargheritaPizza extends Pizza {
    public getPrice(): number {
        return 10;
    }

    public getDescription(): string {
        return "Margherita Pizza";
    }
}

abstract class PizzaDecorator extends Pizza {
    constructor(private pizza: Pizza) {
        super();
    }

    public getPrice(): number {
        return this.pizza.getPrice();
    }

    public getDescription(): string {
        return this.pizza.getDescription();
    }
}

class CheeseDecorator extends PizzaDecorator {
    public getPrice(): number {
        return super.getPrice() + 2;
    }

    public getDescription(): string {
        return super.getDescription() + ", Cheese";
    }
}

class MushroomDecorator extends PizzaDecorator {
    public getPrice(): number {
        return super.getPrice() + 3;
    }

    public getDescription(): string {
        return super.getDescription() + ", Mushrooms";
    }
}

const pizza = new MargheritaPizza();
const pizzaWithCheese = new CheeseDecorator(pizza);
const pizzaWithMushrooms = new MushroomDecorator(pizzaWithCheese);

console.log(pizzaWithMushrooms.getDescription()); // Output: "Margherita Pizza, Cheese, Mushrooms"
console.log(pizzaWithMushrooms.getPrice()); // Output: 15
