function retry(options: { retries: number }) {
    return function (target: any, key: string, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            let retries = options.retries;

            while (retries > 0) {
                try {
                    const result = await originalMethod.apply(this, args);
                    return result;
                } catch (error) {
                    console.log(`Error while calling ${key}: ${error.message}`);
                    retries--;
                }
            }

            throw new Error(`Failed to call ${key} after ${options.retries} retries`);
        };

        return descriptor;
    };
}

class ApiService {
    @retry({ retries: 3 })
    async fetchData(url: string) {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    }
}

const api = new ApiService();
const data = await api.fetchData('https://jsonplaceholder.typicode.com/todos/1')----;
