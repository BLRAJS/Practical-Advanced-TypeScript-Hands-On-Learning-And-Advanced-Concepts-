interface InjectableOptions {
    providedIn?: 'root' | Type<any>;
}

function Injectable(options?: InjectableOptions) {
    return function (target: any) {
        if (options && options.providedIn) {
            // Register provider with root injector
        } else {
            // Register provider with local injector
        }
    };
}

function Inject(token: Type<any>) {
    return function (target: any, key: string, index: number) {
        const dependencies = Reflect.getMetadata('design:paramtypes', target) || [];
        dependencies[index] = token;
        Reflect.defineMetadata('design:paramtypes', dependencies, target);
    };
}

class UserService {
    getUsers() {
        return ['John', 'Jane', 'Bob'];
    }
}

class AppComponent {
    constructor(@Inject(UserService) private userService: UserService) {}

    render() {
        const users = this.userService.getUsers();
        // Render users
    }
}

const app = new AppComponent(new UserService());
app.render();
