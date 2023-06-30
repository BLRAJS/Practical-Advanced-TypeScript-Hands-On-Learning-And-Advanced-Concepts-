abstract class Game {
    public abstract initialize(): void;
    public abstract start(): void;
    public abstract end(): void;

    public play(): void {
        this.initialize();
        this.start();
        this.end();
    }
}

class Football extends Game {
    public initialize(): void {
        console.log("Football game initialized.");
    }

    public start(): void {
        console.log("Football game started. Let's play!");
    }

    public end(): void {
        console.log("Football game ended. Thanks for playing!");
    }
}

class Basketball extends Game {
    public initialize(): void {
        console.log("Basketball game initialized.");
    }

    public start(): void {
        console.log("Basketball game started. Let's play!");
    }

    public end(): void {
        console.log("Basketball game ended. Thanks for playing!");
    }
}

const football = new Football();
football.play(); // Output: "Football game initialized.", "Football game started. Let's play!", "Football game ended. Thanks for playing!"

const basketball = new Basketball();
basketball.play(); // Output: "Basketball game initialized.", "Basketball game started. Let's play!", "Basketball game ended. Thanks for playing!"
