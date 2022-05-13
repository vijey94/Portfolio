import React from "react";
import image from "../../src/img/Vshop1.png";
import image1 from "../../src/img/Vshop2.png";
import image2 from "../../src/img/Vshop3.png";
import "./portfolio.css";

export default function Vshop() {
  return (
    <div className="port">
      <div className="port-img">
        <img src={image} alt="" className="port-img-item" />

        <img src={image1} alt="" className="port-img-item" />
        <img src={image2} alt="" className="port-img-item" />
      </div>
      <div className="port-description">
        <div className="port-description-item">
          Ce site a été développé avec la MERN stack :
        </div>
        <div className="port-description-item">
          -utilisation de React.js pour la partie front-end
        </div>
        <div className="port-description-item">
          -utilisation de Node.js et Express.js pour la partie backend
        </div>
        <div className="port-description-item">
          -utilisation de MongoDb pour la base de donnée
        </div>
        <div className="port-description-item">
          -utilisation du jwt pour vérifier l'identité de l'utilisateur et de
          bcrypt pour crypter les mots de passe
        </div>
        <br />
        <div className="port-description-item">
          -vérification de la saisie des formulaire
        </div>
        <div className="port-description-item">
          -utilisation de Postman pour tester les API
        </div>
        <div className="port-description-item">-implémentation d'un panier</div>
      </div>
    </div>
  );
}
