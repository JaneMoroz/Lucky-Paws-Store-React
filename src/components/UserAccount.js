import React, { useEffect, useState } from "react";
import UserNavigation from "./UserNavigation";
import Wrapper from "../assets/wrappers/UserAccount";
import FormRow from "./FormRow";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../features/user/userSlice";

const UserAccount = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    photo: null,
    photoUrl: `${
      user.photo.startsWith("https://")
        ? user.photo
        : `${process.env.REACT_APP_CLIENT_URL}/img/users/${user.photo}`
    }`,
  });

  useEffect(() => {
    const name = "photoUrl";
    const value = `${process.env.REACT_APP_CLIENT_URL}/img/users/${user.photo}`;
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
      <UserNavigation />
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
    </Wrapper>
  );
};

export default UserAccount;
