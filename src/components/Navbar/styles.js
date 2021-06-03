import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 75%;
  height: 20px;
  margin-top: 150px;

  ul {
    display: flex;

    @media (max-width: 720px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    a {
      cursor: pointer;
    }

    .active-navbar-button {
      margin-right: 40px;

      @media (max-width: 720px) {
        margin-right: 0;
      }

      p {
        font-size: 28px;
        color: #93C1F2;
        text-shadow: 0 0 0.1em white;
      }

      div {
        height: 5px;
        width: 100%;
        background: linear-gradient(90.14deg, #92B7f2 1%, #AC61E5 100.5%);
        box-shadow: 0px 0px 10px #92B7F1;
        border-radius: 1px;
      }      
    }

    .navbar-button {
      margin-right: 40px;

      @media (max-width: 720px) {
        margin-right: 0;
      }

      p {
        font-size: 28px;
        color: #457DB9;
      }

      div {
        height: 5px;
        width: 100%;
        background: linear-gradient(90.14deg, #3388E2 1%, #672F92 100.5%);
        border-radius: 1px;
      }      
    }
  }
`;