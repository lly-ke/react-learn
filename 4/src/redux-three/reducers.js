import {DECREMENT, INCREMENT} from "./action-types";


export default function reducers(state = 0, action) {

    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }


}