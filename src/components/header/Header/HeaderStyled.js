import styled from "styled-components";

export const HeaderStyled = styled.div`
  header {
    position: fixed;
    z-index: 9999;
    width: 100%;
    padding: 20px 50px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: rgba(10, 25, 47, 0.5);
  }

  #logo-img {
    max-width: 50px;
    height: auto;
    cursor: pointer;
  }

  .nav-container {
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 920px) {
    header {
      padding: 20px;
    }
  }
`;
