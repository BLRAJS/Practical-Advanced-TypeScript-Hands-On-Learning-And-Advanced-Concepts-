function retry(maxAttempts: number, delay: number) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function(...args: any[]) {
            let attempt = 1;
            while (attempt <= maxAttempts) {
                try {
                    const result = await originalMethod.apply(this, args);
                    return result;
                } catch (error) {
                    if (attempt < maxAttempts) {
                        console.log(`Method ${propertyKey} failed on attempt ${attempt}. Retrying in ${delay}ms...`);
                        await new Promise(resolve => setTimeout(resolve, delay));
                    } else {
                        console.log(`Method ${propertyKey} failed on attempt ${attempt}. No more retries.`);
                        throw error;
                    }
                }
                attempt++;
            }
        };
        return descriptor;
    };
}

class ApiService {
    @retry(3, 1000)
    async fetchData(url: string) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}. Status code: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
}
