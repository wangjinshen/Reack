import axios from "axios";
export function axiosData() {
    return function (dispatch) {
        axios.get("/data")
            .then(function (response) {
                return dispatch({
                    type: "UPDATE",
                    payload: response.data
                })

            })
    }
}

export function axiosList(dispatch) {
    return function (dispatch) {
        axios.get("/list")
            .then(function (response) {
                return dispatch({
                    type: "UPLIST",
                    payload: response.data.list
                })

            })
    }
}