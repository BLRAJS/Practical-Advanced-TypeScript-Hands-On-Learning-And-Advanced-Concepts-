type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type Route<T extends HttpMethod, U extends string> = {
    method: T;
    path: U;
    query?: Record<string, string>;
    body?: Record<string, any>;
    response: any;
};

type Endpoint<T extends HttpMethod, U extends string> = {
    request: Route<T, U>;
    handler: (req: Route<T, U>["request"]) => Promise<Route<T, U>["response"]>;
};

const getPosts: Endpoint<"GET", "/posts"> = {
    request: { method: "GET", path: "/posts", response: { data: [] } },
    handler: async (req) => {
        // Code to fetch posts
        return { data: [] };
    },
};

const createPost: Endpoint<"POST", "/posts"> = {
    request: {
        method: "POST",
        path: "/posts",
        body: { title: "", content: "" },
        response: { data: {} },
    },
    handler: async (req) => {
        // Code to create post
        return { data: {} };
    },
};
