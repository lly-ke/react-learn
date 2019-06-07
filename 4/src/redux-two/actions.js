import ActionTypes from './action-types';

export const incrementCreator= (number) => (({type: ActionTypes.INCREMENT, data: number}))

export const decrementCreator = (number) => ({type: ActionTypes.DECREMENT, data: number})