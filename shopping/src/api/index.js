import axios from "axios";
export function axiosData(dispatch) {
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