interface MyService {
    // interface implementation
}

@injectable
class MyClass {
    constructor(private myService: MyService) {
        // constructor implementation
    }

    // class implementation
}

function injectable(target: any) {
    const dependencies = Reflect.getMetadata('design:paramtypes', target) || [];
    const injectedParams = dependencies.map((dependency: any) => new dependency());
    return new target(...injectedParams);
}
