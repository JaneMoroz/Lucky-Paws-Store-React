import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: center;

  .order-id {
    @media only screen and (max-width: 37.5em) {
      font-size: 2rem;
      font-weight: 500;
    }
  }

  .date {
    margin-bottom: 1.4rem;
    text-align: center;
  }

  .product-item {
    display: grid;
    grid-template-columns: 5rem 1fr 2rem;
    align-items: center;
    column-gap: 1.2rem;
    padding: 1.4rem 2rem;
  }

  img {
    height: 5rem;
    width: 100%;
    object-fit: cover;
  }

  .order-total {
    padding: 1.4rem 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  .order-total p {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .total {
    font-weight: 500;
    border-top: 1px solid var(--color-grey);
  }

  .order-details {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 2rem;
    align-items: center;
    justify-items: center;
    column-gap: 1rem;
  }

  .order-user,
  .order-status {
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
  }

  .status {
    display: flex;
    column-gap: 1.2rem;
  }

  .form-check {
    display: flex;
    column-gap: 1rem;
  }

  .square {
    display: block;
    height: 1.4rem;
    width: 1.4rem;
  }

  .square--success {
    background-color: var(--color-success);
  }

  .square--danger {
    background-color: var(--color-danger);
  }
`;

export default Wrapper;
