import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import SingleCard from "../Components/SingleCard";
import { getData } from "../Redux/action";
import style from "./Home.module.css"
function Home() {
    const data = useSelector((e) => e.products)
    console.log(data)
const dispatch=useDispatch()
useEffect(()=>{
    dispatch(getData())
},[])

    return <div>
        <Navbar />
        <div className={style.gridContainer}>
            {data.map((e)=>{
                return(
<SingleCard prop={e} key={e.id}/>
                )
            })}
        </div>
    </div>;
}

export default Home;
