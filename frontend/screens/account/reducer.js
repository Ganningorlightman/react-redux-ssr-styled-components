const initialState = {
    user: null,
};

export default function reducer(state = initialState, action) {
    if (action.type === "account") {
        delete action.type;
        return {
            ...state,
            ...action
        };
    } else {
        return state;
    }
}
