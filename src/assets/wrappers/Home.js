import styled from "styled-components";

const Wrapper = styled.nav`
  .nav-list {
    height: calc(100vh - 8rem);
    min-height: 60rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media only screen and (max-width: 37.5em) {
    .nav-list {
      display: flex;
      flex-direction: column;
    }
  }

  .nav-item {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    border: 3px solid #fff;
  }

  .btn {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-item--1 .btn {
    background-color: var(--background-1);
  }

  .nav-item--2 .btn {
    background-color: var(--background-2);
  }

  .nav-item--3 .btn {
    background-color: var(--background-3);
  }

  .nav-item--4 .btn {
    background-color: var(--background-4);
  }

  .img {
    transform: scale(100%);
    backface-visibility: hidden;
    transition: all 0.4s;
  }

  .nav-item:hover .img {
    transform: scale(105%);
  }
`;

export default Wrapper;
