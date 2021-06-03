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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 120px;

  @media (max-width: 720px) {
    margin: 0 20px; 
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    > img {
      width: 144.59px;
      height: 57px;
    }

    div {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
    
    button {
      margin-left: 16px;
      width: 30px;
      height: 30px;
      border: none;
      background: linear-gradient(94.24deg, #CC60F2 0%, #7E3CC9 138.26%);
      border-radius: 8px;
      color: #fff;
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 16px;
        height: 16px;        
      }
    }  
  }

  .input-search {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fff;
    width: 100%;
    margin-bottom: 18px;

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

  
`;