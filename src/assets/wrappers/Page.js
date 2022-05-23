import styled from "styled-components";

const Wrapper = styled.nav`
  height: calc(100vh - 8rem);
  min-height: 60rem;
  width: 100vw;
  position: relative;

  .background {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  .background--1 {
    top: 0;
    left: 0;
    background-color: var(--background-1);
    animation: expand 1s ease-in-out;
  }

  .background--2 {
    top: 0;
    right: 0;
    background-color: var(--background-2);
    animation: expand 1s ease-in-out;
  }

  .background--3 {
    bottom: 0;
    left: 0;
    background-color: var(--background-3);
    animation: expand 1s ease-in-out;
  }

  .background--4 {
    bottom: 0;
    right: 0;
    background-color: var(--background-4);
    animation: expand 1s ease-in-out;
  }

  @keyframes expand {
    from {
      height: 0;
      width: 0;
    }

    to {
      height: 100%;
      width: 100%;
    }
  }
`;

export default Wrapper;
