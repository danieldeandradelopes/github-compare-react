import styled from "styled-components";

export const Container = styled.div`
  /* tipo de display */
  display: flex;
  /* uma coisa ficar em cima da outra em sentido vertical */
  flex-direction: column;
  /* ficar alinhados horizontalmente ao centro (todos elementos dentro dessa div) */
  align-items: center;
  /* para nós distanciarmos um pouco do topo da nossa aplicação */
  padding-top: 60px;
`;

export const Form = styled.form`
  /* distanciar um pouco do topo do logo */
  margin-top: 20px;
  /* força ocupar todo o espaço horizontal possível */
  width: 100%;
  /* limita o width 100% em 400px */
  max-width: 400px;
  /* utilizaremos para fazer os alinhamentos */
  display: flex;

  input {
    /* garantimos que ele irá ocupar todo o espaço possível horizontalmente */
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    font-size: 18px;
    color: #444;
    /* cantos arredondados */
    border-radius: 3px;

    border: ${props => (props.withError ? "2px solid #f00" : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #63f5b0;
    color: #fff;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    /* cantos arredondados */
    border-radius: 3px;

    &:hover {
      background: #52d89f;
    }
  }
`;
