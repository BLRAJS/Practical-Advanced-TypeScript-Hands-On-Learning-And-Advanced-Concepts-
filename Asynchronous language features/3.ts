class RateLimiter {
    private tokens: number;
    private refillRate: number;
    private lastRefill: number;

    constructor(tokensPerMinute: number) {
        this.tokens = tokensPerMinute;
        this.refillRate = 60000 / tokensPerMinute;
        this.lastRefill = Date.now();
    }

    async acquireToken(): Promise<void> {
        const now = Date.now();
        const timeSinceLastRefill = now - this.lastRefill;

        this.tokens += Math.floor(timeSinceLastRefill / this.refillRate);
        this.tokens = Math.min(this.tokens, this.refillRate);
        this.lastRefill = now;

        if (this.tokens < 1) {
            const waitTime = this.refillRate - timeSinceLastRefill;
            await new Promise<void>((resolve) => setTimeout(resolve, waitTime));
            await this.acquireToken(); // Try again after waiting
        } else {
            this.tokens--;
        }
    }
}

async function rateLimitedApiCall(rateLimiter: RateLimiter, apiCall: () => Promise<string>): Promise<string> {
    await rateLimiter.acquireToken();
    return apiCall();
}

// Example usage:

async function mockApiCall(): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return 'API call completed';
}

async function main() {
    const rateLimiter = new RateLimiter(5); // Allow 5 API calls per minute

    for (let i = 0; i < 10; i++) {
        const result = await rateLimitedApiCall(rateLimiter, mockApiCall);
        console.log(`API call ${i + 1}: ${result}`);
    }
}

main();
