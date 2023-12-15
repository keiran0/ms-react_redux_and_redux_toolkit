import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter:0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.counter++; //seems to be allowed to mutate the state. When using redux toolkit, we can't accidentally mutate the existing state. It automatically clones the state, keeps the unedited state, and overwrites the editing state in an immutable way.
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload; //payload is the default name of the property that will hold any extra data being dispatched
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter;
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions;
export default store;
