import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0 5.6rem;
  justify-items: center;

  @media only screen and (max-width: 37.5em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2.4rem;
  }
`;

export default Wrapper;
