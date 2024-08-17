import { IntroStyled } from "./IntroStyled";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { myIntro } from "../../constants/data";

const Intro = () => {
  return (
    <IntroStyled>
      <section className="intro" id="intro">
        <div className="intro-container">
          <p className="intro-descr">Hi, my name is</p>
          <h1 className="heading"> Ihor Luzhnyi.</h1>
          <h1 className="heading-secondary">I study Frontend Development.</h1>
          <p className="intro-descr">{myIntro}</p>
        </div>
        <div className="media-links">
          <div className="media-icon">
            <a
              href="https://github.com/IgorLuzhnyi"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
          <div className="media-icon">
            <a
              href="https://www.instagram.com/thwth_sop/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />
            </a>
          </div>
          <div className="media-icon">
            <a
              href="https://www.linkedin.com/in/ihor-luzhnyi-440a9313b/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
          <div className="styled-line"> </div>
        </div>
        <div className="email-link">
          <a href="mailto:luzhnyi.igor@gmail.com" id="email-text">
            luzhnyi.igor@gmail.com
          </a>
          <div className="styled-line"> </div>
        </div>
      </section>
    </IntroStyled>
  );
};

export default Intro;
