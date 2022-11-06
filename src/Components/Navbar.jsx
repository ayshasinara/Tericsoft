import React from "react";
import { useDispatch } from "react-redux";
import { getDataMainCatogery } from "../Redux/action";
import style from "./Navbar.module.css"
function Navbar() {
  const dispatch = useDispatch()

  const handleclick = (p) => {
    dispatch(getDataMainCatogery(p))
  }

  return <div className={style.navContainer}>
    <button onClick={() => handleclick("dress")}>
      <i className="fa-solid fa-shirt fa-2x" ></i>
      <div>Dress</div>
    </button>

    <button onClick={() => handleclick("shoes")}>
      <i className="fa-solid fa-shoe-prints fa-2x"></i>
      <div>Shoes</div>
    </button>

    <button onClick={() => handleclick("electronics")}>
      <i className="fa-solid fa-house-laptop fa-2x"></i>
      <div>Eelectronics</div>
    </button>

  </div>;
}

export default Navbar;
