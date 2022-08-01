import styled from "styled-components";

const Wrapper = styled.section`
  padding: 3.2rem;
  color: #fff;

  @media only screen and (max-width: 56.25em) {
    padding: 0;
    margin-bottom: 2.4rem;
  }

  .filters-hidden {
    position: relative;
    min-height: 7rem;
  }
  .filters-container {
    position: relative;
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

  .hidden {
    display: none;
  }

  /* total */
  .total {
    text-align: center;
    padding-bottom: 1.4rem;
  }

  /* grid or list display buttons */
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

  /* close button */
  .close {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    padding: 0.5rem;
    font-size: 3.6rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.3s;

    @media only screen and (max-width: 56.25em) {
      display: flex;
    }
  }

  /* from */

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
    background-color: var(--color-grey);
  }

  .form-label {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    text-align: center;
    color: #fff;
  }

  /* type/ category buttons */
  .category-container {
    grid-row: 1/-1;
    grid-column: 2;
  }
  .btns-container {
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
  }

  .category {
    color: #fff;
    text-transform: lowercase;
    font-size: 1.8rem;
    text-align: start;
    padding: 0.6rem;
    transition: all 0.3s;
  }

  /*  all buttons hover */
  .icon:hover,
  .active,
  .category:hover,
  .close:hover {
    background-color: #fff;
    color: var(--color-grey);
  }

  /* clear filter button */
  .clear {
    text-transform: uppercase;
    color: inherit;
    text-decoration: underline;
    grid-row: 3;
    grid-column: 1/-1;
  }
`;

export default Wrapper;
