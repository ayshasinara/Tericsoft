import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid'
import {  getDataSubCatogery } from "../Redux/action";
function SubNavbar() {
    const subCategories = useSelector((e) => e.subCategory)
    const MainCatogery=useSelector((e) => e.products)
    // console.log(MainCatogery[0]?.MainCatogery)
    const dispatch=useDispatch()
    const handleGetdata=(p,e)=>{
dispatch(getDataSubCatogery(p,e))
    }
    

    return <div style={{ display: "flex", justifyContent: "space-around", padding: "3% 0%" }} >
        {
            subCategories.map((e) => {
                return (<button key={uniqid()}  onClick={()=>handleGetdata(MainCatogery[0]?.MainCatogery,e)}>{e}</button>)
            })
        }
    </div>;
}

export default SubNavbar;
