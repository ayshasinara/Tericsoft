import React from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid'
import { getDataSubCatogery } from "../Redux/action";
function SubNavbar() {
    const subCategories = useSelector((e) => e.subCategory)
    const MainCatogery = useSelector((e) => e.products)

    const dispatch = useDispatch()
    const handleGetdata = (p, e) => {
        dispatch(getDataSubCatogery(p, e))
    }


    return <div style={{ display: "flex", justifyContent: "space-around", padding: "1% 0%", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px" }} >
        {
            subCategories.map((e) => {
                return (<button key={uniqid()} onClick={() => handleGetdata(MainCatogery[0]?.MainCatogery, e)}>{e}</button>)
            })
        }
    </div>;
}

export default SubNavbar;
