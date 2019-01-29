export default function invoice(state={}, action){
    switch(action.type){
        case "UPDATE_INVOICE_STATE":
            return {...state, ...action.data}
        default :
            return state;
    }
}