import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60rem;

  h2 {
    color: var(--color-text-primary);
    margin-bottom: 2.4rem;
  }

  .btn--outlined {
    margin-top: 1rem;
    align-self: stretch;
  }

  p {
    font-size: 1.8rem;
    color: var(--color-grey);
  }
`;

export default Wrapper;
