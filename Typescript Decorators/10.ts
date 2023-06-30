import 'reflect-metadata';

interface Dependencies {
    methodName: string;
    parameterIndex: number;
    serviceIdentifier: any;
}

function inject<T>(serviceIdentifier: symbol) {
    return function(target: any, methodName: string, parameterIndex: number) {
        const constructor = target.constructor;
        const dependencies: Dependencies[] = Reflect.getMetadata('dependencies', constructor) || [];
        dependencies.push({ methodName, parameterIndex, serviceIdentifier });
        Reflect.defineMetadata('dependencies', dependencies, constructor);
    };
}

class UserService {
    constructor(private readonly logger: LoggerService, private readonly database: DatabaseService) {}

    async getUser(@inject<LoggerService>(Symbol.for('LoggerService')) id: number): Promise<void> {
        // method implementation
    }
}

class LoggerService {}
class DatabaseService {}

const userService = new UserService(new LoggerService(), new DatabaseService());
