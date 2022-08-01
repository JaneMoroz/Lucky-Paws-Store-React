import styled from "styled-components";

const Wrapper = styled.section`
  grid-row: 2;
  grid-column: 1;

  @media only screen and (max-width: 37.5em) {
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 2rem;
    align-items: center;
    padding-bottom: 2.4rem;
  }

  .menu {
    display: flex;
    flex-direction: column;
    row-gap: 1.8rem;
    padding: 2.4rem 2.4rem 0 0;

    @media only screen and (max-width: 37.5em) {
      padding-top: 0;
    }
  }

  .menu--user {
    margin-top: 2.4rem;
  }

  .menu-item {
    font-size: 1.6rem;
    color: var(--color-text-secondary);
    transition: all 0.3s;
  }

  .menu-item:hover,
  .menu-item .active {
    color: var(--color-text-primary);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    text-transform: uppercase;
    color: inherit;
    white-space: nowrap;
  }

  .btn--logout {
    padding: 0;
    margin-bottom: 1.2rem;
  }

  .admin {
    display: block;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #fff;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    column-gap: 1.2rem;
    padding: 1rem 2rem;
    background-color: var(--color-text-secondary);
    margin-bottom: 1rem;
    margin-top: 1.4rem;

    @media only screen and (max-width: 37.5em) {
      font-size: 1.4rem;
      margin-bottom: 0;
      padding: 0.5rem 2rem;
    }
  }
`;

export default Wrapper;
