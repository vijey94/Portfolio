import "./about.css";
import Me from "../../img/13.jpg";
import O from "../../img/openclassrooms.png";
import D from "../../img/doranco.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          "Je ne perds jamais, soit je gagne, soit j'apprends." ~ Nelson Mandela
        </p>
        <p className="a-desc">
          Passionné par les technologies du web et la programmation, j'ai
          effectué plusieurs formations pour acquérir et développer mes
          compétences dans ces domaines. Actuellement en recherche d'alternance
          pour suivre la formation de développeur web à l'école Openclassrooms,
          je suis à la recherche d'un poste de développeur web en contrat
          d'apprentissage ou de professionnalisation pour pouvoir mettre mes
          compétences au service des entreprises et monter en compétences
          rapidement.
        </p>
        <div className="a-award">
          <img src={O} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Titre RNCP 5</h4>
            <p className="a-award-desc">Formation de développeur web</p>
          </div>
        </div>
        <div className="a-award">
          <img src={D} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Titre RNCP 6</h4>
            <p className="a-award-desc">
              Formation de concepteur développeur d'applications
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
