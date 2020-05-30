import * as Types from './../constain/index';
const initialState = []
const listAirport=(state = initialState, action)=> {
    switch (action.type) {
        case Types.FET_AIRPORT:
            state=action.airPort;
            return [...state]
        default:
            return [...state]
    }
}
export default listAirport;