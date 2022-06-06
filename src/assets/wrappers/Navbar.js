import styled from "styled-components";

const Wrapper = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.2rem;

  .logo {
    font-size: 3.2rem;
    font-weight: 300;
    color: var(--color-text-primary);
  }

  .icon {
    color: var(--color-text-primary);
    font-size: 2.8rem;
    path {
      stroke-width: 1px;
    }
  }

  .btns-container {
    display: flex;
    column-gap: 1.6rem;
    align-items: center;
  }

  .btn {
    position: relative;
  }

  .cart {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(30%);
    content: "";
    height: 1.8rem;
    width: 1.8rem;
    background-color: var(--color-1);
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
`;

export default Wrapper;
