import styled from "styled-components";

const Wrapper = styled.div`
  h2 {
    text-transform: capitalize;
  }

  .product-container {
    padding: 2.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3.2rem;

    @media only screen and (max-width: 56.25em) {
      grid-template-columns: 1fr;
      justify-items: center;
      row-gap: 2.4rem;
    }
  }

  .btn-container {
    display: flex;
    column-gap: 1.4rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
    @media only screen and (max-width: 56.25em) {
      width: 100%;
      max-width: 70rem;
    }
  }

  .images {
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 56.25em) {
      width: 100%;
      max-width: 70rem;
    }
  }

  .main-image {
    height: 50rem;
    width: 100%;
    object-fit: cover;
  }

  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 10rem;
      width: 100%;
      object-fit: cover;
      cursor: pointer;

      @media only screen and (max-width: 75em) {
        height: 7rem;
      }

      @media only screen and (max-width: 56.25em) {
        height: 10rem;
        object-fit: cover;
      }
    }
  }

  .active {
    box-shadow: 0px 0px 0px 2px var(--color-text-primary-light);
  }

  .header {
    display: flex;
    justify-content: space-between;
  }

  .main {
    color: var(--color-text-secondary);
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;

    h3 {
      text-transform: uppercase;
    }

    @media only screen and (max-width: 56.25em) {
      padding: 0 4.8rem;
    }

    @media only screen and (max-width: 37.5em) {
      padding: 0;
    }
  }

  .option {
    display: flex;
    column-gap: 1.6rem;
    align-items: center;
    padding: 1.2rem 0;

    @media only screen and (max-width: 37.5em) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 1.4rem;
    }

    h3 {
      @media only screen and (max-width: 37.5em) {
        grid-row: 1 /-1;
        align-self: flex-start;
      }
    }
  }

  .features-list {
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
    padding: 2.4rem;
    line-height: 1.8;
  }

  .main-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
  }

  .quantity {
    font-size: 3rem;
    display: flex;
    column-gap: 1.2rem;
    align-items: center;
  }

  .icon {
    color: var(--color-text-primary);
  }

  .price {
    font-size: 2.6rem;
    font-weight: 300;
  }
`;

export default Wrapper;
