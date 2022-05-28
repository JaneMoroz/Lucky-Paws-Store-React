import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
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
