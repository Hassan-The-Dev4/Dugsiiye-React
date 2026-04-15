import { useReducer } from "react";

const intialState = {counterA: 0, counterB: 0}

const doubleCounterReducer = (state, action) => {
    
    switch(action.type){
        case 'Increment_A':
            return ({...state, counterA: state.counterA + 1});
        case 'Decrement_A':
            return ({...state, counterA: state.counterA - 1});
        case 'Increment_B':
            return ({...state, counterB: state.counterB + 1});
        case 'Decrement_B':
            return ({...state, counterB: state.counterB - 1});
        case 'Reset_All':
            return intialState;
        default: 
            return state;
    }

}

export const DoubleCounter = () => {

    const [state, dispatch] = useReducer(doubleCounterReducer, intialState);
    return (
        <div>


            <h2>Double Counter</h2>

            <div>
                <h2>Counter A: {state.counterA}</h2>
                <button onClick={()=> dispatch({type: 'Decrement_A'})} disabled={state.counterA === 0}>-A</button>
                <button onClick={()=> dispatch({type: 'Increment_A'})}>+A</button>
            </div>

            <div>
                <h2>Counter B: {state.counterB}</h2>
                <button onClick={()=> dispatch({type: 'Decrement_B'})} disabled={state.counterB === 0}>-B</button>
                <button onClick={()=> dispatch({type: 'Increment_B'})}>+B</button>
            </div>

            <div>
                <button onClick={()=> dispatch({type: 'Reset_All'})}>Reset Both</button>
            </div>


        </div>
    )
}