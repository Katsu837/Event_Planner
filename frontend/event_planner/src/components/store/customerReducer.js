const defaultState  = {
    name: "",
    email: "",
    token: ""
}

export const customerReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ENTRY":
        case "EXIT":
            return 
        default:
            return state
    }
}