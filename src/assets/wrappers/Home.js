import styled from "styled-components";

const Wrapper = styled.div`
  height: calc(100vh - 8rem);
  min-height: 60rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  .section {
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

  .section--1 .btn {
    background-color: var(--background-1);
  }

  .section--2 .btn {
    background-color: var(--background-2);
  }

  .section--3 .btn {
    background-color: var(--background-3);
  }

  .section--4 .btn {
    background-color: var(--background-4);
  }

  .img {
    transform: scale(100%);
    transition: all 0.4s;
  }

  .section:hover .img {
    transform: scale(105%);
  }
`;

export default Wrapper;
