import styled from "styled-components";

export const IntroStyled = styled.div`
  .intro {
    height: 100vh;
    display: block;
    overflow-y: hidden;
  }

  .intro-container {
    display: block;
    max-width: 1000px;
    margin: 45vh auto 0;
    transform: translateY(-50%);
  }

  h1 {
    margin: 20px 0;
  }

  .heading,
  .heading-secondary {
    transform: translateX(-5px);
  }

  .intro-descr {
    max-width: 450px;
    color: ${({ theme }) => theme.$colorPrimary};
  }

  .media-links {
    position: fixed;
    left: 60px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .media-icon {
    padding: 10px;
  }

  .media-icon:hover,
  .email-link:hover {
    transition: 0.3s;
    transform: translateY(-3px);
  }

  .media-icon svg {
    width: 20px;
    height: auto;
  }

  .styled-line {
    height: 90px;
    width: 1px;
    margin-top: 20px;
    background-color: ${({ theme }) => theme.$darkGrey};
  }

  .email-link {
    position: fixed;
    right: 60px;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #email-text {
    writing-mode: vertical-lr;
  }

  @media only screen and (max-width: 1240px) {
    .intro-container {
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 920px) {
    .intro-container {
      max-width: 500px;
    }

    .heading,
    .heading-secondary {
      font-size: 40px;
    }

    .media-links {
      left: 30px;
    }

    .email-link {
      right: 30px;
    }
  }

  @media only screen and (max-width: 700px) {
    .intro-container {
      max-width: 340px;
    }
  }
`;
