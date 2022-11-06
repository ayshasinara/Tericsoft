import * as types from "./actionTypes"

const initialState = {
    products: [],
   
    subCategory: [],
    isLoading: false,
    isError: false
}
const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.POST_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.POST_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false
            }
        case types.POST_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case types.GET_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case types.GET_DATA_SUCCESS:

            let subCategories = new Set()
            payload.forEach(element => {
                subCategories.add(element.SubCatogery)

            })
            subCategories = Array.from(subCategories)

            return {
                ...state,
                products: payload,
                subCategory: subCategories,

                isLoading: false,
                isError: false
            }
        case types.GET_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default: return state
    }

}
export { reducer }