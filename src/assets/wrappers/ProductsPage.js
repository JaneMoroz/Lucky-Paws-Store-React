import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;

  .page-container {
    opacity: 100%;
    display: grid;
    grid-template-columns: min-content 1fr;
    justify-items: center;
    animation-fill-mode: forwards;
    animation: becomeVisible 1.5s ease-in-out;

    @media only screen and (max-width: 56.25em) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Wrapper;
