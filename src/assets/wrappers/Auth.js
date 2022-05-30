import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5.6rem;

  .btn--outlined {
    margin-top: 1rem;
    align-self: stretch;
  }

  p {
    display: flex;
    column-gap: 1.2rem;
    padding: 1.6rem 0;
    font-size: 1.8rem;
    color: var(--color-grey);
  }
`;

export default Wrapper;
