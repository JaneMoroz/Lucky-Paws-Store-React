import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid var(--color-grey);
  h4 {
    display: inline-block;
    position: relative;
    color: var(--color-text-primary);
    margin: 0;
    padding-bottom: 1.2rem;
    transition: all 0.3s;
  }

  h4::after {
    content: "";
    position: absolute;
    bottom: 1rem;
    left: 0;
    height: 1px;
    width: 0;
    background-color: var(--color-text-primary-light);
    transition: all 0.3s;
  }

  h4:hover {
    color: var(--color-text-primary-light);
  }

  h4:hover::after {
    width: 100%;
  }

  .order-item {
    display: grid;
    grid-template-columns: 1fr 5rem 10rem;
    column-gap: 1.2rem;
    row-gap: 1rem;
    align-items: center;
    font-size: 1.6rem;
    padding: 0.6rem 0;
  }

  .title {
    display: inline-block;
    white-space: nowrap;
    text-transform: capitalize;
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
    padding: 1rem 0;
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
