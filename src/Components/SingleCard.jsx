import React from "react";

function SingleCard({ prop }) {
    return <div style={{ height: "20em",  display: "flex", flexDirection: "column",boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px" }}>
        <div style={{  maxHeight: "80%" }} >
            <img style={{ width: "90%", height: "100%", padding: "3%" }} src={prop.url} />
        </div>
        <div style={
            {padding:"3% 0%"}
        }>{prop.name}</div>


    </div>;
}

export default SingleCard;
