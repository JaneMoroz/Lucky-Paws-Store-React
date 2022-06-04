import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3.2rem;
  color: #fff;

  @media only screen and (max-width: 56.25em) {
    padding: 0;
    margin-bottom: 2.4rem;
  }

  .filters-container {
    padding: 2.4rem;
    border: 1px solid #fff;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    align-items: center;

    @media only screen and (max-width: 56.25em) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 4.8rem;
    }

    @media only screen and (max-width: 37.5em) {
      display: flex;
    }
  }

  .total {
    text-align: center;
    padding-bottom: 1.4rem;
  }

  .display-filter {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 1.4rem;
  }

  .icon {
    padding: 0.5rem;
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.3s;
  }

  .icon:hover,
  .active {
    background-color: #fff;
    color: var(--color-1);
  }

  .form {
    @media only screen and (max-width: 56.25em) {
      padding: 0;
    }
  }

  .form-control {
    padding: 1.6rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .form-input {
    appearance: none;
    border: 1px solid #fff;
    background-color: transparent;
    padding: 1rem 1.6rem;
    color: #fff;
    border-radius: 0;
    min-width: 25rem;
  }

  .form-input::placeholder {
    color: #fff;
    text-transform: lowercase;
  }

  .form-input:focus {
    outline: #fff;
    background-color: var(--color-1);
  }

  .form-label {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    text-align: center;
    color: #fff;
  }

  .search {
    border-bottom: 1px solid #fff;
  }

  .category {
    color: #fff;
    text-transform: lowercase;
    font-size: 1.8rem;
    text-align: start;
    padding: 0.6rem;
    transition: all 0.3s;
  }

  .category:hover {
    background-color: var(--color-1);
  }

  .btns-container {
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
  }

  .clear {
    text-transform: uppercase;
    color: inherit;
    text-decoration: underline;
    grid-row: 2;
    grid-column: 1/-1;
  }
`;

export default Wrapper;
