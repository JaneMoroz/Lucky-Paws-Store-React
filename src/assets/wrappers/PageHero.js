import styled from "styled-components";

const Wrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;

  .page h1 {
    color: #fff;
  }

  .page h1::after {
    background-color: #fff;
  }

  h1 {
    color: var(--color-text-primary-light);
  }

  h1::after {
    background-color: var(--color-text-primary-light);
  }

  .current-page {
    color: var(--color-text-primary);
  }
`;

export default Wrapper;
