import ActionTypes from "./action-types";

export default (state = 0, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return state + action.data;
        case ActionTypes.DECREMENT:
            return state - action.data;
        default:
            return state;
    }

}