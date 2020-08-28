const initialState={
    FictionData: ""
}

const FictionReducer = (state = initialState, action ) => {
    
    switch(action.type){
        case "FICTION_DATA" : {

            return{
                ...state,
                FictionData: action.FictionData
            }
        }
        default: {
            return state;
        }
    }
}

export default FictionReducer;