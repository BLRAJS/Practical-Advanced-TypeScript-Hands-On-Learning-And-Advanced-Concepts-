interface Action<T extends string> {
    type: T;
}

interface PayloadAction<T extends string, P> extends Action<T> {
    payload: P;
}

type ActionCreator<T extends string, P> = (...args: any[]) => PayloadAction<T, P>;

type ActionsMap = {
    [actionType: string]: ActionCreator<any, any>;
};

type ActionTypes<T extends ActionsMap> = {
    [K in keyof T]: ReturnType<T[K]>;
}[keyof T];

function createAction<T extends string, P>(
    type: T,
    payloadCreator: (...args: any[]) => P
): ActionCreator<T, P> {
    return (...args: any[]): PayloadAction<T, P> => ({
        type,
        payload: payloadCreator(...args),
    });
}

// Usage
const increment = createAction("INCREMENT", (value: number) => value);
const setName = createAction("SET_NAME", (name: string) => name);

type MyActions = ActionTypes<typeof increment | typeof setName>;

function reducer(state: any, action: MyActions) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, counter: state.counter + action.payload };
        case "SET_NAME":
            return { ...state, name: action.payload };
        default:
            return state;
    }
}
