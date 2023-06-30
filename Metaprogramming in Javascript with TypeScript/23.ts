function counterReducer(state: State, action: any): State {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload };
        case 'decrement':
            return { ...state, counter: state.counter + action.payload };
        default:
            return state;
    }
}
