const dependencyContainer = new Map<string | symbol | object, object>();

function register<T>(token: string | symbol | object, constructor: new () => T): void {
    if (dependencyContainer.has(token)) {
        throw new Error(`Dependency with token '${token.toString()}' is already registered.`);
    }
    dependencyContainer.set(token, new constructor());
}

function resolve<T>(token: string | symbol | object): T {
    const dependency = dependencyContainer.get(token);
    if (!dependency) {
        throw new Error(`Dependency with token '${token.toString()}' is not registered.`);
    }
    return dependency as T;
}

// Example services
class Logger {
    log(message: string): void {
        console.log(message);
    }
}

class UserService {
    constructor(private logger: Logger) {}

    createUser(name: string): void {
        this.logger.log(`User created: ${name}`);
    }
}

// Register dependencies
register("logger", Logger);
register("userService", () => new UserService(resolve<Logger>("logger")));

// Resolve and use dependencies
const logger = resolve<Logger>("logger");
const userService = resolve<UserService>("userService");

logger.log("Hello, world!");
userService.createUser("John");
