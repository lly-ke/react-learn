import ActionTypes from './action-types'

export const increment = (number) => ({type: ActionTypes.INCREMENT, data: number});
export const decrement = (number) => ({type: ActionTypes.DECREMENT, data: number});