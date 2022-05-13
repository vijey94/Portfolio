import "./intro.css";
import Moi from "../../img/11.jpg";

import React from "react";

export default function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, je suis</h2>
          <h1 className="i-name">Vijay</h1>

          <div className="i-description">
            Développeur web fullstack en recherche d'alternance, j'évolue sur le
            langage Javascript et ses différents frameworks. Pour en savoir plus
            sur moi et mes réalisations, c'est plus bas :D !
          </div>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">HTML5/CSS3</div>
              <div className="i-title-item">Javascript</div>
              <div className="i-title-item">React.js</div>
              <div className="i-title-item">Node.js</div>
              <div className="i-title-item">Java</div>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          <img src={Moi} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
}
