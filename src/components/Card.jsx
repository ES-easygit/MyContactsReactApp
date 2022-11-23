import React from "react";
import Detail from "./Detail";

function Card(props){
  return(
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle_img" src={props.img} alt="avatar_img"/>
      </div>
      <div className="bottom">
      <Detail dinfo={props.tel}/>
      <Detail dinfo={props.email}/>
      </div>
    </div>
  );
}

export default Card;