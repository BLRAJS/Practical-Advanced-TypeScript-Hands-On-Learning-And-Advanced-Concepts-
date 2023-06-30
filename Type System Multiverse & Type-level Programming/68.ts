type ApiResponse<T> = { status: 'success', data: T } | { status: 'error', message: string };
type FlattenApiResponse<T> = T extends ApiResponse<infer U> ? U : never;

interface User {
    id: number;
    name: string;
}

async function fetchUser(userId: number): Promise<ApiResponse<User>> {
    // ... Implementation to fetch user data from an API
}

const userResponse = await fetchUser(1);

if (userResponse.status === 'success') {
    const user: FlattenApiResponse<typeof userResponse> = userResponse.data;
    console.log(`User: ${user.name}`);
} else {
    console.error(`Error: ${userResponse.message}`);
}
