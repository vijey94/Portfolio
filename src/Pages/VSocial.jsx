import React from "react";
import image from "../../src/img/vsocial1.png";
import image1 from "../../src/img/vsocial2.png";
import image2 from "../../src/img/vsocial3.png";
import "./portfolio.css";

export default function VSocial() {
  return (
    <div className="port">
      <div className="port-img">
        <img src={image} alt="" className="port-img-item" />

        <img src={image1} alt="" className="port-img-item" />
        <img src={image2} alt="" className="port-img-item" />
      </div>
      <div className="port-description">
        <div className="port-description-item">
          Ce site a été développé avec React :
        </div>
        <div className="port-description-item">-intégration d'une maquette</div>
        <div className="port-description-item">
          -importance accordé au design
        </div>
        <div className="port-description-item">
          -données récupérées de façon dynamique avec une dummydata
        </div>
        <br />
        <div className="port-description-item">
          -changement de design en fonction de là ou se situe l'utilisateur
        </div>
        <div className="port-description-item">
          -à venir : développement de la partie backend pour rendre le site
          entièrement fonctionnel
        </div>
        <div className="port-description-item">lien github : </div>
      </div>
    </div>
  );
}
