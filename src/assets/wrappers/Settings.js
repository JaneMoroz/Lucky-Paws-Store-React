import styled from "styled-components";

const Wrapper = styled.div`
  .image-row {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.6rem 0;
    padding: 1.2rem 0;
  }
  .form-photo {
    height: 7.5rem;
    width: 7.5rem;
    border-radius: 50%;
    margin-right: 2rem;
    object-fit: cover;
  }
  .form-upload {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .form-upload + label {
    font-size: 1.6rem;
    text-decoration: underline;
    color: var(--color-text-primary);
    display: inline-block;
    padding: 3px;
    cursor: pointer;
  }
`;

export default Wrapper;
