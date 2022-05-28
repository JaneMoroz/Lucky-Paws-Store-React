import { BsGear, BsCart, BsStar, BsCreditCard, BsFolder } from "react-icons/bs";
import { HiOutlineUsers, HiOutlineCash, HiLogout } from "react-icons/hi";

export const userLinks = [
  { id: 1, text: "settings", path: "/", icon: <BsGear /> },
  { id: 2, text: "my orders", path: "/my-orders", icon: <BsCart /> },
  { id: 3, text: "my reviews", path: "/my-reviews", icon: <BsStar /> },
  { id: 4, text: "billing", path: "/my-orders", icon: <BsCreditCard /> },
  { id: 5, text: "log out", path: "/logout", icon: <HiLogout /> },
];

export const adminLinks = [
  { id: 1, text: "manage products", path: "/products", icon: <BsFolder /> },
  { id: 2, text: "manage users", path: "/users", icon: <HiOutlineUsers /> },
  { id: 3, text: "manage reviews", path: "/reviews", icon: <BsStar /> },
  { id: 4, text: "manage orders", path: "/orders", icon: <HiOutlineCash /> },
];
