import styled from "styled-components";

const Wrapper = styled.div`
  .product-container {
    padding: 2.4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3.2rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;
  }

  .images {
    display: flex;
    flex-direction: column;
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
      height: 100px;
      cursor: pointer;
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
  }

  .option {
    display: flex;
    column-gap: 1.6rem;
    align-items: center;
    padding: 1.2rem 0;
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
