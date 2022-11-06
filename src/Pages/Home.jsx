import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import SingleCard from "../Components/SingleCard";
import SubNavbar from "../Components/SubNavbar";
import { getData } from "../Redux/action";
import style from "./Home.module.css"
import ProductForm from "./ProductForm";
function Home() {
    const data = useSelector((e) => e.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [])
   

    return <div>
        <Navbar />
       
       
        <div className={style.gridContainer}>
            {data.map((e) => {
                return (
                    <SingleCard prop={e} key={e.id} />
                )
            })}
        </div>
        {/* <ProductForm /> */}
    </div>;
}

export default Home;
