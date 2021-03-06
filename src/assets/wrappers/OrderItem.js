import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--color-grey);
  width: 100%;
  h3 {
    display: inline-block;
    position: relative;
    color: var(--color-text-primary);
    padding-bottom: 1.2rem;
    transition: all 0.3s;
  }

  h3::after {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 0;
    height: 1px;
    width: 0;
    background-color: var(--color-text-primary-light);
    transition: all 0.3s;
  }

  h3:hover {
    color: var(--color-text-primary-light);
  }

  h3:hover::after {
    width: 100%;
  }

  .order-item {
    display: grid;
    grid-template-columns: 1fr 5rem 10rem;
    column-gap: 1.2rem;
    row-gap: 1rem;
    align-items: center;
    font-size: 1.6rem;
    padding: 0.6rem 2rem;

    @media only screen and (max-width: 37.5em) {
      grid-template-columns: 1fr 5rem 6rem;
    }
  }

  .title {
    display: inline-block;
    white-space: nowrap;
    text-transform: capitalize;

    @media only screen and (max-width: 37.5em) {
      white-space: pre-wrap;
    }
  }

  .quantity {
    justify-self: end;
  }

  .price {
    justify-self: end;
  }

  .order-total {
    display: grid;
    grid-template-columns: 1fr 5rem 10rem;
    column-gap: 1.2rem;
    row-gap: 1rem;
    align-items: center;
    font-size: 1.6rem;
    padding: 1rem 2rem;
    margin-top: 1.6rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 37.5em) {
      grid-template-columns: 1fr 5rem 6rem;
    }
  }

  .status p {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding: 0.5rem 0;
  }

  .status span {
    display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: var(--color-danger);
  }

  .status .status--success {
    background-color: var(--color-success);
  }

  .address {
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 0;
  }
`;

export default Wrapper;
