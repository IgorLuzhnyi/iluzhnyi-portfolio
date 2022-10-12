import { WorksStyled } from "./WorksStyled";
import { projects } from "../../../constants/data";
import Project from "../Project/Project";

const Works = () => {
  return (
    <WorksStyled>
      <section className="works" id="works">
        <div className="works-container">
          <h2>My works</h2>
          <div className="works-inner">
            {projects.map((project, i) => (
              <Project key={i} data={project} />
            ))}
          </div>
        </div>
      </section>
    </WorksStyled>
  );
};

export default Works;
