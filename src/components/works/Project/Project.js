import { ProjectStyled } from "./ProjectStyled";
import { FaRegFolder } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";

const Project = ({ data }) => {
  const { title, ghLink, website, description, techs } = data;

  return (
    <ProjectStyled>
      <div className="project-container">
        <div className="project-upper">
          <FaRegFolder id="project-folder-icon" />
          <div className="project-links">
            <a href={website} target="_blank" rel="noreferrer">
              <BiLinkExternal />
            </a>
            <a href={ghLink} target="_blank" rel="noreferrer">
              <BsGithub id="project-github" />
            </a>
          </div>
        </div>
        <div className="project-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <p className="project-technologies">{techs}</p>
      </div>
    </ProjectStyled>
  );
};

export default Project;
