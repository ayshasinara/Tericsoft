import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postData } from "../Redux/action";

function ProductForm() {
    const [productDetails, setProductDetails] = useState([])
    const dispatch = useDispatch()
    const handleChange = (e) => {

        const { name, value } = e.target
        setProductDetails({ ...productDetails, [name]: value })
    }
    console.log(productDetails)
    const handleSubmit = (e) => {

        dispatch(postData(productDetails))
    }
    return <div>

        <form onSubmit={handleSubmit} >
            <input type="url" placeholder="Image url" name="url" onChange={handleChange} />
            <input type="text" placeholder="Name of product" name="name" onChange={handleChange} />
            <input type="text" placeholder="Main Catogery" name="MainCatogery" onChange={handleChange} />
            <input type="text" placeholder="Sub Catogery" name="SubCatogery" onChange={handleChange} />
            <input type="submit" value="submit" />
        </form>

    </div>;
}

export default ProductForm;
