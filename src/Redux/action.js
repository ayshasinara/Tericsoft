import * as types from "./actionTypes"
import axios from "axios"


const getData = () => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST })
    return axios
        .get('https://backendfortest.herokuapp.com/products')
        .then((res) => {

            return dispatch({
                type: types.GET_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({ type: types.GET_DATA_FAILURE })
        })

}

const getDataMainCatogery = (payload) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST })
    return axios
        .get(`https://backendfortest.herokuapp.com/products?MainCatogery=${payload}`)
        .then((res) => {

            return dispatch({
                type: types.GET_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({ type: types.GET_DATA_FAILURE })
        })

}

const getDataSubCatogery = (e, payload) => (dispatch) => {
    dispatch({ type: types.GET_DATA_REQUEST })
    return axios
        .get(`https://backendfortest.herokuapp.com/products?MainCatogery=${e}&SubCatogery=${payload}`)
        .then((res) => {

            return dispatch({
                type: types.GET_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch({ type: types.GET_DATA_FAILURE })
        })

}





export {  getData, getDataMainCatogery, getDataSubCatogery };
