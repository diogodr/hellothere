import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
  height: 80px;
  background: linear-gradient(270.19deg, #0F022D 0%, #330368 240.88%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 150px;
  width: 100%;

  img {
    margin-right: 20px;
  }

  @media (max-width: 1380px) {
    margin: 0 40px;
  }

  > div {
    display: flex;

    button {
    margin-left: 16px;
    width: 150px;
    height: 40px;
    border: none;
    background: linear-gradient(94.24deg, #CC60F2 0%, #7E3CC9 138.26%);
    box-shadow: 0px 0px 8px #CC60F2;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }

  .input-search {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fff;
    margin-right: 44px;
    width: 100%;

    input {
      width: 100%;
      border: none;
      width: 100%;
      background: transparent;
      color: #fff;
      font-size: 16px;
    }

    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
  }
`;