import * as types from "./actionTypes"
import axios from "axios"

const postData = (payload) => (dispatch) => {
    dispatch({ type: types.POST_DATA_REQUEST })
    return axios
        .post(`http://localhost:8080/products`, payload)
        .then(() => {
            return dispatch({
                type: types.POST_DATA_SUCCESS,
                payload
            })
        })
        .catch(() => {
            dispatch({ type: types.POST_DATA_FAILURE })
        })

}


const getData=()=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST})
    return axios 
    .get(`http://localhost:8080/products`)
    .then((res)=>{
       
        return dispatch({
            type:types.GET_DATA_SUCCESS,
            payload:res.data
        })
    })
    .catch((err)=>{
        dispatch({type:types.GET_DATA_FAILURE})
    })

}

const getDataMainCatogery=(payload)=>(dispatch)=>{
    dispatch({type:types.GET_DATA_REQUEST})
    return axios 
    .get(`http://localhost:8080/products?MainCatogery=${payload}`)
    .then((res)=>{
       
        return dispatch({
            type:types.GET_DATA_SUCCESS,
            payload:res.data
        })
    })
    .catch((err)=>{
        dispatch({type:types.GET_DATA_FAILURE})
    })

}

export { postData ,getData,getDataMainCatogery};
