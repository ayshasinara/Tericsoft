import React from "react";
import style from "./Navbar.module.css"
import uniqid from "uniqid"
import IconButton from "./IconButton";
import SubNavbar from "./SubNavbar";
function Navbar() {

  let navbarData = [
    {
      icon: <i className="fa-solid fa-shirt fa-2x" ></i>,
      catogery: 'Dress',
      prop: 'dress'
    },
    {
      icon: <i className="fa-solid fa-shoe-prints fa-2x"></i>,
      catogery: 'Sheos',
      prop: 'shoes'
    },
    {
      icon: <i className="fa-solid fa-house-laptop fa-2x"></i>,
      catogery: 'Electronics',
      prop: 'electronics'
    },
    {
      icon: <i className="fa-solid fa-bag-shopping fa-2x"></i>,
      catogery: 'Bag',
      prop: 'bag'
    },
  ]
 

  return <div >
<div className={style.navContainer}>
    {
      navbarData.map((e) => {
        return <IconButton props={e} key={uniqid()} />
      })
    }
     </div>
     <SubNavbar  />
  </div>;
}

export default Navbar;
