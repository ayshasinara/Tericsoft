import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import SingleCard from "../Components/SingleCard";
import { getData } from "../Redux/action";
import style from "./Home.module.css"

function Home() {
    const loading = useSelector((e) => e.isLoading)
    const data = useSelector((e) => e.products)
    const error = useSelector((e) => e.isError)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [])
    if (loading) {
        return <h1>Loading...</h1>
    }
    else if (error) {
        return <h1>
            something went wrong
        </h1>
    }

    return <div>
        <Navbar />
        <div className={style.gridContainer}>
            {data.map((e) => {
                return (
                    <SingleCard prop={e} key={e.id} />
                )
            })}
        </div>

    </div>;
}

export default Home;
