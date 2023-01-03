import React from "react";
import "./someimg.scss";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
const SomeImg = () => {
  return (
    <div className="allImg">
      <div className="bigImg">
        <img className="img" src={img3} alt="" />
      </div>
      <div className="smallImgs">
        <div className="imggrp">
          <img className="sImg" src={img2} alt="" />
          <img className="sImg" src={img4} alt="" />
        </div>

        <div className="imggrp">
          <img className="sImg" src={img5} alt="" />
          <img className="sImg" src={img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SomeImg;
