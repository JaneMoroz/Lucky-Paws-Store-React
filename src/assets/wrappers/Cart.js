import styled from "styled-components";

const Wrapper = styled.div`
  .cart-container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    padding: 1.6rem;
    max-width: 90rem;
  }

  .cart-item {
    display: grid;
    grid-template-columns: 10rem 1fr 5rem 8rem;
    column-gap: 1.4rem;
    align-items: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    img {
      height: 100%;
      min-height: 7rem;
      width: 100%;
      object-fit: cover;
    }

    .text {
      display: flex;
      flex-direction: column;
      row-gap: 0.8rem;
      padding: 1rem 0;
    }

    .option {
      font-size: 1.4rem;
      color: var(--color-grey);
    }

    .amount {
      font-size: 1.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      justify-self: center;

      .icon {
        font-size: 2rem;
        padding: 0.5rem 1rem;
        color: var(--color-1);
      }
    }

    .price {
      justify-self: center;
      font-size: 2rem;
      font-weight: 300;
    }
  }

  .cart-total {
    font-size: 2rem;
    font-weight: 300;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding: 2.4rem;
    background-color: var(--color-text-primary-light);
    color: #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;

    .line {
      display: flex;
      justify-content: space-between;
    }

    .total {
      font-weight: 400;
    }
  }

  .address {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding-bottom: 1rem;
  }
`;

export default Wrapper;
