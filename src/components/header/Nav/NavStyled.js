import styled from "styled-components";

export const NavStyled = styled.div`
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
  }

  .media-nav__container {
    display: none;
  }

  .media-nav {
    display: none;
  }

  .nav li a,
  .media-nav li a {
    cursor: pointer;
  }

  .nav li .active {
    color: ${({ theme }) => theme.$colorPrimary};
  }

  #burger-menu {
    display: none;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.$lightGrey};
    font-size: 30px;
    cursor: pointer;
  }

  a {
    font-size: 22px;
    color: ${({ theme }) => theme.$lightGrey};
  }

  #cv-button {
    padding: 10px;
    text-decoration: none;
    color: ${({ theme }) => theme.$colorPrimary};
    border: 1px solid ${({ theme }) => theme.$colorPrimary};
    border-radius: 3px;
    font-size: 20px;
  }

  #cv-button:hover {
    background-color: ${({ theme }) => theme.$btnHovBkg};
    transition: ${({ theme }) => theme.$hovTime};
  }

  @media only screen and (max-width: 700px) {
    .nav {
      display: none;
    }

    .media-nav__container {
      display: block;
    }

    .media-nav {
      display: flex;
      width: 300px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: -9999;
      right: 0;
      bottom: 0;
      height: 100%;
      background-color: rgba(17, 34, 64, 1);
      transition: 0.3s ease-in;
      transform: translateX(100%);
    }

    .media-nav-active {
      transition: 0.3s ease-in;
      transform: translateX(0);
    }

    .media-nav li,
    #cv-button {
      margin: 20px 0;
    }

    #burger-menu {
      display: block;
    }
  }
`;
