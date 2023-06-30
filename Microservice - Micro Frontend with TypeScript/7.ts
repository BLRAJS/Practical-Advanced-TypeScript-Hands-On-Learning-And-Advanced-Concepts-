// events.ts
export interface UserLoggedInPayload {
    userId: string;
    userName: string;
}

export const USER_LOGGED_IN = "user_logged_in";
