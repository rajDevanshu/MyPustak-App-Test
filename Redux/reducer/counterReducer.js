const initialState = {
    counter: 0
}

const reducer = ( state= initialState, action) => {

    switch(action.type) {
        case 'INCRAESE_COUNTER': {
            return{ counter: counter+1 }
        }

        case 'DECRAESE_COUNTER' : {
            return { counter: counter-1}
        }
    }
    return state;
}

export default reducer;