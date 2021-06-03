import styled from "styled-components";

export const Container = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    width: 50%;
    padding: 4px;
    margin: 8px;
    background-color: #fff;
    border-radius: 1px;

    @media (max-width: 720px) {
      width: 80%;
    }


    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      

      img {
        width: 20px;
        margin: 0;
      }

      p {
        font-size: 28px;

        @media (max-width: 720px) {
          font-size: 12px;
        }
      }
    }
  }
`;