import React from "react";
import { useDispatch } from "react-redux";
import { getDataMainCatogery } from "../Redux/action";

function IconButton({ props}) {
  const dispatch = useDispatch()


  const handleclick = (p) => {
    dispatch(getDataMainCatogery(p))
  }

 
  return <button onClick={() => handleclick(props?.prop)}>
    {props?.icon}
    <div>{props?.catogery}</div>
  </button>

}

export default IconButton;
