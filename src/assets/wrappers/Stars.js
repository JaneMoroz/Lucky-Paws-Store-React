import styled from "styled-components";

const Wrapper = styled.div`
  p {
    text-align: end;
    padding: 0.6rem 0;
  }

  .stars {
    display: flex;
    column-gap: 0.8rem;
  }

  .star {
    font-size: 1.8rem;
    color: var(--color-yellow);
  }
`;

export default Wrapper;
