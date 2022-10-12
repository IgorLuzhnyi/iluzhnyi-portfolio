import styled from "styled-components";

export const WorksStyled = styled.div`
  .works {
    display: block;
    margin-bottom: 300px;
  }

  .works-container {
    display: block;
    max-width: 1030px;
    margin: 0 auto;
    padding-top: 100px;
  }

  h2 {
    text-align: center;
  }

  .works-inner {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }

  @media only screen and (max-width: 1300px) {
    .works-container {
      max-width: 680px;
    }

    .works-inner {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only screen and (max-width: 920px) {
    .works-container {
      max-width: 320px;
    }

    .works-inner {
      grid-template-columns: 1fr;
    }
  }
`;
