import React, { useState, useEffect } from "react";
import Style from "./Board.module.css";
import collapseall from "../../assets/icon/collapseall.png";
import DataCard from "../DataCard/DataCard";

import { useNavigate } from "react-router-dom";
function BoardCart({ name, addbtn,data,setshare,setFetchTasks }) {
  const [Collapseall, setcollapseall] = useState(false);

  const toggleCollapseAll = () => {
    setcollapseall(!Collapseall);
  };
  
  const addButton = () => {
    if (name === "To do") {
      return (
        <button onClick={() => addbtn(true)} className={Style.addbtn}>
          +
        </button>
      );
    }
  };

  return (
    <div className={Style.cartContainer}>
      <div className={Style.topCart}>
        <p className={Style.name}>{name}</p>
        <div className={Style.btns}>
          {addButton()}
          <button
            className={Style.collaps}
            onClick={toggleCollapseAll}
          >
            <img src={collapseall} alt="collapseallBtn" />
          </button>
        </div>
      </div>
      <div className={Style.cartContaint}>
        <div className={Style.showContaint}>
          { data.map((item,index)=>(
            <DataCard key={index} setFetchTasks={setFetchTasks} Collapseall={Collapseall} cardData={item} setshare={setshare}/>
          ))
}
        </div>
      </div>
    </div>

  );
}

export default BoardCart;
