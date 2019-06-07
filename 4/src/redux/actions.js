import {INCREMENT, DECREMENT} from "./action-types";

export const incrementCreator = (number) => ({type: INCREMENT, data: number})
export const decrementCreator = (number) => ({type: DECREMENT, data: number})