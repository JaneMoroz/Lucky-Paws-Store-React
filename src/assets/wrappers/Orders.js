import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2.4rem 3.2rem;
  h2 {
    font-size: 2.4rem;
    font-weight: 300;
    color: var(--color-text-primary);
    padding: 1.6rem 0 3.6rem 0;
  }

  .orders-container {
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
  }
`;

export default Wrapper;
