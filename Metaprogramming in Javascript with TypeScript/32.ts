type Class<T> = new (...args: any[]) => T;

const routerMetadataKey = Symbol('Router');

function route(path: string) {
    return function (target: any) {
        Reflect.defineMetadata(routerMetadataKey, { path }, target);
    };
}

function getRoutes() {
    const routes: { path: string, component: Class<any> }[] = [];

    for (const key of Reflect.getMetadataKeys(routerMetadataKey)) {
        const component = Reflect.get(key, Reflect.getMetadata(routerMetadataKey, key));
        const path = Reflect.getMetadata(routerMetadataKey, component).path;
        routes.push({ path, component });
    }

    return routes;
}

class HomeComponent {
    render() {
        return <h1>Welcome to the home page</h1>;
    }
}

@route('/')
class AboutComponent {
    render() {
        return <h1>Welcome to the about page</h1>;
    }
}

const routes = getRoutes();
const activeRoute = routes.find(route => window.location.pathname === route.path);

if (activeRoute) {
    const component = new activeRoute.component();
    document.body.appendChild(component.render());
}
