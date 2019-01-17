import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
const initialState = {
    data: [],
    reduceArr: [],
    list: [],
    myapp: [
        {
            add: "添加",
            check: 0,
            checked: 0,
            hisadd: "已添加",
            id: 3,
            ids: 5414,
            name: "唐娟",
            num: 1000,
            src: "http://dummyimage.com/50*50/f279bd&text=合",
            word: "老在型没严思直场来日或每",
        }, {
            add: "添加",
            check: 0,
            checked: 0,
            hisadd: "已添加",
            id: 3,
            ids: 5414,
            name: "按时",
            num: 1000,
            src: "http://dummyimage.com/50*50/f279bd&text=合",
            word: "老在型没严思直场来日或每",
        }, {
            add: "添加",
            check: 0,
            checked: 0,
            hisadd: "已添加",
            id: 3,
            ids: 5414,
            name: "是的",
            num: 1000,
            src: "http://dummyimage.com/50*50/f279bd&text=合",
            word: "老在型没严思直场来日或每",
        }, {
            add: "添加",
            check: 0,
            checked: 0,
            hisadd: "已添加",
            id: 3,
            ids: 5414,
            name: "价格",
            num: 1000,
            src: "http://dummyimage.com/50*50/f279bd&text=合",
            word: "老在型没严思直场来日或每",
        }
    ],
    prices: {
        sum: 0,
        pricess: 0
    },
    flog:true


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
        case "UPLIST": {
            return { ...state, list: [...payload] }
        }
        case "UPFLOG": {
            return { ...state, flog: payload}
        }
        case "MYAPP": {
            return { ...state, myapp: [...payload]}
        }
        default:
            return state
    }
}
const store = createStore(reducer, applyMiddleware(thunk))
export default store