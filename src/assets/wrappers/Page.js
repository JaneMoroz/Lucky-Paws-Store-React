import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 60rem;
  width: 100vw;
  position: relative;

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

  .background {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
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

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 100%;
    }
  }

  @keyframes becomeVisible {
    from {
      opacity: 0;
    }

    to {
      opacity: 0;
    }
  }
`;

export default Wrapper;
