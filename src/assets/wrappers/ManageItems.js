import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2.4rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;
  min-width: 45rem;

  .item {
    display: grid;
    grid-template-columns: 8rem 1fr 10rem;
    column-gap: 1.4rem;
    align-items: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding-right: 1.2rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h2 {
    padding: 1rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
    padding: 1.6rem 0;
  }

  .btns-container {
    display: flex;
    column-gap: 2.4rem;
    justify-self: center;
  }

  .icon {
    color: var(--color-text-primary);
    font-size: 1.6rem;
    path {
      stroke-width: 1px;
    }
  }
`;

export default Wrapper;
