import React from "react";
import image from "../../src/img/10.png";
import image1 from "../../src/img/P1.png";
import image2 from "../../src/img/P2.png";
import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="port">
      <div className="port-img">
        <img src={image} alt="" className="port-img-item" />

        <img src={image1} alt="" className="port-img-item" />
        <img src={image2} alt="" className="port-img-item" />
      </div>
      <div className="port-description">
        <div className="port-description-item">
          Ce site a été fait en React :
        </div>
        <div className="port-description-item">-utilisation des Router</div>
        <div className="port-description-item">-utilisation des Link</div>
        <div className="port-description-item">-animations CSS</div>
        <br />
        <div className="port-description-item">lien github :</div>
      </div>
    </div>
  );
}
