import styled from "styled-components";

const Wrapper = styled.div`
  .menu {
    display: flex;
    flex-direction: column;
    row-gap: 1.4rem;
    padding: 1.8rem 0;
  }

  .menu-item {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: var(--color-text-secondary);
    transition: all 0.3s;
  }

  .menu-item:hover,
  .menu-item .btn--active {
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
  }
`;

export default Wrapper;