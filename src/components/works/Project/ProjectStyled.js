import styled from "styled-components";

export const ProjectStyled = styled.div`
  .project-container {
    position: relative;
    margin: 10px;
    padding: 20px;
    width: 280px;
    height: 280px;
    background-color: ${({ theme }) => theme.$bkgLight};
    border-radius: 4px;
  }

  .project-upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #project-folder-icon {
    width: 40px;
    height: auto;
    color: ${({ theme }) => theme.$colorPrimary};
  }

  .project-links {
    display: flex;
    justify-content: space-between;
    width: 50px;
  }

  .project-links svg {
    width: 20px;
    height: auto;
  }

  h4 {
    margin: 20px 0;
  }

  .project-technologies {
    font-size: 12px;
    position: absolute;
    bottom: 24px;
  }
`;
