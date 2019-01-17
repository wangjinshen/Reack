import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
const initialState = {
    data: [],
    reduceArr: [],
    prices: {
        sum: 0,
        pricess: 0
    }

}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "UPDATE": {
            return { ...state, data: [...payload] }
        }
        case "ADDITEM":
            return { ...state, reduceArr: [...payload] }
        case "UPDATASUM":
            return { ...state, prices: payload }
        default:
            return state
    }
}
const store = createStore(reducer, applyMiddleware(thunk))
export default store