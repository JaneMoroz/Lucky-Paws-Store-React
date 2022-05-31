import styled from "styled-components";

const Wrapper = styled.div`
  /* for cats */
  /* list */
  .products-container {
    display: flex;
    flex-direction: column;
    row-gap: 1.8rem;
  }

  .product {
    display: grid;
    grid-template-columns: 16rem 1fr min-content;
    background-color: #fff;
    min-width: 55rem;
    border: 1px solid #fff;
  }

  .image-container {
    position: relative;
    height: 14rem;
  }

  .search {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    font-size: 3.6rem;
    color: #fff;
    background-color: var(--background-1);
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
    padding: 0 2.4rem;
  }

  .grid .product {
    display: flex;
    flex-direction: column;
    min-width: 20rem;
    height: 30rem;
  }

  .grid .details {
    height: 100%;
  }

  .grid .image-container {
    height: 20rem;
  }

  .grid .image-container:hover .search {
    display: block;
  }

  .grid .category,
  .grid .btns {
    display: none;
  }
`;

export default Wrapper;
