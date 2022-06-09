import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/Settings";
import FormRow from "../../components/FormRow";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser, updateUserPassword } from "../../features/user/userSlice";
import defaultImage from "../../assets/images/default.jpg";
import { getMyCart, updateMyCart } from "../../features/cart/cartSlice";

const Settings = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    photo: null,
    photoUrl: `${
      user.photo.startsWith("https://") === true
        ? user.photo
        : `${process.env.REACT_APP_CLIENT_URL}/img/users/${user.photo}`
    }`,
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    // if cart from locale storage is empty just get cart from the server if it exists
    // if cart from locale storage is NOT empty, copy it to the server (or replace if user cart already exists on the server)
    if (cartItems.length === 0) {
      dispatch(getMyCart());
    } else if (cartItems.length !== 0) {
      let tempCartItems = [...cartItems];
      tempCartItems = tempCartItems.map((item) => {
        const id = item.product.id;
        return { ...item, product: id };
      });
      dispatch(updateMyCart(tempCartItems));
    }
  }, []);

  useEffect(() => {
    const name = "photoUrl";
    const value = `${
      user.photo.startsWith("https://") === true
        ? user.photo
        : `${process.env.REACT_APP_CLIENT_URL}/img/users/${user.photo}`
    }`;
    setUserData({ ...userData, [name]: value });
  }, [user.photo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, photo } = userData;
    if (!name || !email) {
      toast.error("please fill out all fields");
      return;
    }

    const userForm = new FormData();
    userForm.append("name", name);
    userForm.append("email", email);
    userForm.append("photo", photo);

    dispatch(updateUser(userForm));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const { passwordCurrent, password, passwordConfirm } = userData;
    if (!passwordCurrent || !password || !passwordConfirm) {
      toast.error("please fill out all fields");
      return;
    }

    dispatch(
      updateUserPassword({ passwordCurrent, password, passwordConfirm })
    );
    userData.passwordCurrent =
      userData.password =
      userData.passwordConfirm =
        "";
  };

  const handleChange = (e) => {
    const name = e.target.name;
    let value = "";
    if (name === "photo") {
      value = e.target.files[0];
    } else {
      value = e.target.value;
      setUserData({ ...userData, [name]: value });
    }
    setUserData({ ...userData, [name]: value });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Your account settings</h2>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="name"
            value={userData.email}
            handleChange={handleChange}
          />
          <div className="image-row">
            <img
              className="form-photo"
              src={userData.photoUrl}
              alt={userData.name}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = defaultImage;
              }}
            />
            <input
              className="form-upload"
              type="file"
              accept="image/*"
              name="photo"
              id="photo"
              onChange={handleChange}
            />
            <label htmlFor="photo">Choose new photo</label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn--outlined"
          disabled={isLoading}
        >
          {isLoading ? "updating..." : "save settings"}
        </button>
      </form>
      <hr />
      <form className="form" onSubmit={handlePasswordSubmit}>
        <h2>Your Password settings</h2>
        <div className="form-center">
          <FormRow
            type="password"
            name="passwordCurrent"
            placeholderText="current password"
            value={userData.passwordCurrent}
            handleChange={handleChange}
          />
          <FormRow
            type="password"
            name="password"
            value={userData.password}
            handleChange={handleChange}
          />
          <FormRow
            type="password"
            name="passwordConfirm"
            placeholderText="confirm password"
            value={userData.passwordConfirm}
            handleChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn--outlined"
          disabled={isLoading}
        >
          {isLoading ? "updating..." : "save password"}
        </button>
      </form>
    </Wrapper>
  );
};

export default Settings;
