// import { BsGear, BsCart, BsStar, BsCreditCard, BsFolder } from "react-icons/bs";
// import { HiOutlineUsers, HiOutlineCash } from "react-icons/hi";
import { BsGear } from "@react-icons/all-files/bs/BsGear";
// import { BsCart } from "@react-icons/all-files/bs/BsCart";
import { BsStar } from "@react-icons/all-files/bs/BsStar";
import { BsCreditCard } from "@react-icons/all-files/bs/BsCreditCard";
import { BsFolder } from "@react-icons/all-files/bs/BsFolder";
import { HiOutlineUsers } from "@react-icons/all-files/hi/HiOutlineUsers";
import { HiOutlineCash } from "@react-icons/all-files/hi/HiOutlineCash";

export const userLinks = [
  { id: 1, text: "settings", path: "/account/", icon: <BsGear /> },
  { id: 2, text: "my orders", path: "my-orders", icon: <BsGear /> },
  { id: 3, text: "my reviews", path: "my-reviews", icon: <BsStar /> },
  {
    id: 4,
    text: "billing",
    path: "billing",
    icon: <BsCreditCard />,
  },
];

export const adminLinks = [
  {
    id: 1,
    text: "manage products",
    path: "manage-products",
    icon: <BsFolder />,
  },
  {
    id: 2,
    text: "manage users",
    path: "manage-users",
    icon: <HiOutlineUsers />,
  },
  { id: 3, text: "manage reviews", path: "manage-reviews", icon: <BsStar /> },
  {
    id: 4,
    text: "manage orders",
    path: "manage-orders",
    icon: <HiOutlineCash />,
  },
];
