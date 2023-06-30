// Define the aspect
function log(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };

    return descriptor;
}

// Define another aspect
function authorize(permission: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            // Check if the user has the required permission
            if (!this.currentUser || !this.currentUser.permissions.includes(permission)) {
                throw new Error(`Unauthorized: user does not have permission ${permission}`);
            }

            // Call the original method
            const result = await originalMethod.apply(this, args);
            return result;
        };

        return descriptor;
    };
}

// Define the CRM service
class CRMService {
    private currentUser: any;

    @log
    async getCustomer(id: string): Promise<any> {
        // Get the customer from the API
        const response = await fetch(`/api/customers/${id}`, { method: "GET" });

        if (!response.ok) {
            throw new Error(`Failed to get customer: ${response.status}`);
        }

        const customer = await response.json();
        return customer;
    }

    @log
    @authorize("create")
    async createCustomer(data: any): Promise<any> {
        // Create the customer via the API
        const response = await fetch(`/api/customers`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Failed to create customer: ${response.status}`);
        }

        const customer = await response.json();
        return customer;
    }
}

// Usage
const crmService = new CRMService();

// Set the current user
crmService["currentUser"] = {
    name: "John Doe",
    permissions: ["create", "read", "update", "delete"],
};

// Call the createCustomer method
crmService.createCustomer({ name: "Jane Doe", email: "jane.doe@example.com" }).catch(console.error);

// Call the getCustomer method
crmService.getCustomer("123").catch(console.error);
