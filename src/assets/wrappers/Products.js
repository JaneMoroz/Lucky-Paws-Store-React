import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  .container {
    background-color: #fff;
  }

  .empty {
    box-shadow: none;
  }

  /* list */
  .products-container {
    display: flex;
    flex-direction: column;
    row-gap: 1.8rem;
    padding: 0 2.4rem 3.2rem 2rem;

    @media only screen and (max-width: 37.5em) {
      padding: 0 0 2.4rem 0;
    }
  }

  .product {
    display: grid;
    grid-template-columns: 16rem 1fr min-content;
    background-color: #fff;
    width: 100%;
    border: 1px solid #fff;

    @media only screen and (max-width: 37.5em) {
      grid-template-columns: 16rem 1fr;
    }
  }

  .image-container {
    position: relative;
    height: 14rem;
  }

  .btn--details {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    font-size: 3.6rem;
    color: #fff;
    background-color: var(--color-grey-transparent);
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  h3 {
    padding-bottom: 0.4rem;
  }

  .details,
  .btns {
    padding: 1.4rem 1.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .btns {
    @media only screen and (max-width: 37.5em) {
      grid-row: 2;
      grid-column: 1/-1;
    }
  }

  .category {
    font-weight: 300;
    text-transform: capitalize;
  }

  .price {
    font-size: 2.4rem;
    font-weight: 300;
  }

  /* grid */
  .grid.products-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.8rem;
    align-items: center;
    justify-content: center;
    padding: 0 2.4rem 3.2rem 2.4rem;

    @media only screen and (max-width: 75em) {
      grid-template-columns: 1fr 1fr;
    }

    @media only screen and (max-width: 56.25em) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media only screen and (max-width: 37.5em) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .grid {
    .product {
      display: flex;
      flex-direction: column;
      min-width: 20rem;
      min-height: 30rem;
      row-gap: 0;
      height: 100%;
    }

    .details {
      height: 100%;
      justify-content: space-between;
    }

    .image-container {
      height: 20rem;
    }

    .image-container:hover .btn--details {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .category,
    .btns {
      display: none;
    }
  }
`;

export default Wrapper;
