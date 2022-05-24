import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/Auth";
import { FormRow } from "../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
  isMember: true,
};

const Auth = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, passwordConfirm, isMember } = values;
    if (
      !email ||
      !password ||
      (!isMember && !name) ||
      (!isMember && !passwordConfirm)
    ) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password, passwordConfirm }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h2>{values.isMember ? "Login" : "Sign Up"}</h2>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        {/* password confirmation field */}
        {!values.isMember && (
          <FormRow
            type="password"
            name="passwordConfirm"
            value={values.passwordConfirm}
            handleChange={handleChange}
          />
        )}
        <button
          type="submit"
          className="btn btn--outlined"
          disabled={isLoading}
        >
          {isLoading ? "loading..." : "submit"}
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className="btn btn--text"
          >
            {values.isMember ? "Sign up" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Auth;
