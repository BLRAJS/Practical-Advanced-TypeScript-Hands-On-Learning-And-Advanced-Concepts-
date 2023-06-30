type AsyncFunction<T> = () => Promise<T>;

function retry<T>(asyncFunction: AsyncFunction<T>, retries: number, delay: number): Promise<T> {
    return new Promise((resolve, reject) => {
        async function attempt() {
            try {
                const result = await asyncFunction();
                resolve(result);
            } catch (error) {
                if (retries > 0) {
                    setTimeout(() => {
                        retries--;
                        attempt();
                    }, delay);
                } else {
                    reject(error);
                }
            }
        }

        attempt();
    });
}

// Example usage:

async function fetchData(): Promise<string> {
    // This function simulates an API call that might fail randomly.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve("Success!") : reject(new Error("Failed to fetch data."));
        }, 1000);
    });
}

async function main() {
    try {
        const data = await retry(fetchData, 3, 1000);
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}

main();
