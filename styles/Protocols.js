import styled from "styled-components";

export const ProtocolsContainer = styled.div`
  padding: 2.5em 0;
`;

export const PGrid = styled.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  .protocol-card {
    padding: 1em;
    border-radius: 0.5em;
    background-color: #fff;
    text-align: start;
    margin: 0.5em;
    transition: all 0.2s ease-in-out;

    h1 {
      color: #2b6cb0;
      font-size: 1.5em;
    }

    p {
      font-weight: 300;
      line-height: 1.5;
    }
  }
`;

export default ProtocolsContainer;
