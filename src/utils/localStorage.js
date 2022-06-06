export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const addCartToLocalStorage = (user) => {
  localStorage.setItem("cart", JSON.stringify(user));
};

export const getCartFromLocalStorage = () => {
  const result = localStorage.getItem("cart");
  const cart = result ? JSON.parse(result) : null;
  return cart;
};
