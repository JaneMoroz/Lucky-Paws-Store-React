import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;

  h1 {
    color: var(--color-text-primary-light);
  }

  h1::after {
    background-color: var(--color-text-primary-light);
  }

  .products h1 {
    color: #fff;
  }

  .products h1::after {
    background-color: #fff;
  }

  .current-page {
    color: var(--color-text-primary);
  }
`;

export default Wrapper;
