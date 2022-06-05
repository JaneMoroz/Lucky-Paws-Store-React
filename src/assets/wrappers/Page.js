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

  .about-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    min-height: 100vh;
    justify-items: center;
    align-items: center;
    animation-fill-mode: forwards;
    animation: becomeVisible 1.5s ease-in-out;

    @media only screen and (max-width: 37.5em) {
      display: flex;
      flex-direction: column;
    }
  }

  .gallery {
    padding: 3.2rem 0;
  }

  .img {
    position: relative;
    height: 25rem;
    width: 25rem;
    border: 4px solid #fff;
    background-color: #fff;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .img--1,
  .img--3 {
    @media only screen and (max-width: 37.5em) {
      display: none;
    }
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--image-overlay);
  }

  .text {
    display: flex;
    flex-direction: column;
    row-gap: 1.4rem;
    padding: 3.2rem;
    margin-right: 3.6rem;

    @media only screen and (max-width: 37.5em) {
      padding: 2.4rem;
      margin-right: 0;
    }

    .main {
      font-size: 2.8rem;
      font-weight: 300;
      color: var(--color-text-primary-light);
      margin-bottom: 2rem;
      line-height: 1.8;
    }

    .secondary {
      font-size: 1.6rem;
      line-height: 1.6;
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
