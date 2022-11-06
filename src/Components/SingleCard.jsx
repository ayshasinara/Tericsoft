import React from "react";
import style from "./SingleCard.module.css"
function SingleCard({ prop }) {
    return <div className={style.SingleCardContainer } >
        <div style={{ maxHeight: "80%" }} >
            <img style={{ width: "90%", height: "100%", padding: "3%" }} src={prop.url} />
        </div>
        <div style={
            { padding: "3% 0%" }
        }>{prop.name}</div>


    </div>;
}

export default SingleCard;
