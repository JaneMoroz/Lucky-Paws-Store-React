import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 60rem;
  width: 100vw;
  position: relative;

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
`;

export default Wrapper;
