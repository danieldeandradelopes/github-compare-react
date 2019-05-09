import styled from "styled-components";

export const Container = styled.div`
  /* posicionar um repositório ao lado do outro */
  display: flex;
  /* diz que vamos alinhar linha */
  flex-direction: row;
  /* quando tem um alinha ao meio, quando tem dois também, sempre centralizando tudo */
  justify-content: center;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
    img {
      width: 64px;
    }
  }

  ul {
    list-style: none;
    li {
      font-weight: bold;
      /* 12px vertical e 20px horizontal */
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      /* colocar uma linha branca e uma cinza no nosso li */
      /* 2n - 1 significa nos pares em todos os impares */
      /* se quiser colocar nos pares basta tirar o -1 ficando assim (2n) */
      &:nth-child(2n - 1) {
        background: #e6e6e6;
      }
    }
  }
`;
