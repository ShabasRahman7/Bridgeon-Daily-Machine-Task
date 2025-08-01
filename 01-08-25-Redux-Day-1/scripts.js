import {createStore} from 'redux'

const initial_counter={
    count: 0
}

function reducer(state=initial_counter,action){
    switch(action.type){
        case 'INCREMENT' : 
            return {count: state.count+1}
        case 'DECREMENT' :
            return {count: state.count-1}
        default:
            return state
        
    }
}

const store = createStore(reducer)

console.log(store.getState())

store.subscribe(()=> console.log(store.getState()))

store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})