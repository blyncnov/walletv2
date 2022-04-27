import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80vh;
  background: #f7fafc;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    height: auto;
  }
`;

export const Constraints = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
`;

export const HGridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  gap: 4em;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

export const HLeft = styled.div`
  width: 100%;

  h1 {
    font-size: 3.75rem;
    color: #2b6cb0;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 3.15rem;
    }
  }

  p {
    font-size: 20px;
    margin: 1em 0;
    line-height: 1.5;
    color: #4a5567;

    @media (max-width: 768px) {
      font-size: 14px;
      margin: 1.3em 0;
    }
  }

  button {
    background-color: #3182ce;
    border: none;
    width: 40%;
    padding: 1.5em 3em;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #2b6cb0;
    }

    @media (max-width: 1000px) {
      width: 60%;
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 1.2em 2em;
    }
  }
  @media (max-width: 768px) {
    margin: 2em 0;
  }
`;

export const HRight = styled.div`
  width: 100%;
`;

export default HeaderContainer;
