import { useNavigate } from "react-router";
import Header from "./Header";
import { useState } from "react";
import { TiWarning } from "react-icons/ti";

export default function SignIn() {
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [SignUpFormErrors, setSignUpFormErrors] = useState({});
  const [SignInFormErrors, setSignInFormErrors] = useState({});
  const [handleError, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email_address: "",
    phone_number: "",
    password: "",
  });

  const togglePasswordVis = () => {
    setPasswordShown(!passwordShown);
  };

  const handleRadioChange = (e) => {
    setIsCreateAccount(e.target.id === "create_account");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validation = (values) => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^(?:\+1\s?)?\(?(\d{3})\)?[\s.-]?(\d{3})[\s.-]?(\d{4})$/;
  
    if (isCreateAccount) {
      if (!values.full_name) errors.full_name = "Full name is required";
      if (!values.phone_number) errors.phone_number = "Phone number is required";
      if (values.phone_number && !phonePattern.test(values.phone_number))
        errors.phone_number = "Enter a valid Canadian phone number";
    }
    
    if (!values.email_address)
      errors.email_address = "Email address is required";
    if (values.email_address && !emailPattern.test(values.email_address))
      errors.email_address = "Email address is invalid";
    if (!values.password) errors.password = "Password is required";
    
    return errors;
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    const errors = validation(formData);
    if (Object.keys(errors).length > 0) {
      setSignInFormErrors(errors);
      setError("");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("full_name", data.full_name);
      localStorage.setItem("email_address", data.email_address);
      localStorage.setItem("phone_number", data.phone_number);
      navigate("/");
      setFormData({ email_address: "", password: "" });
    } catch (error) {
      setError("Email or Password is incorrect");
      setSignInFormErrors({});
      console.error("Sign-in error:", error);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const errors = validation(formData);
    if (Object.keys(errors).length > 0) {
      setSignUpFormErrors(errors);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseText = await response.text();
      console.log("Signup successful:", responseText);
      navigate("/");

      setFormData({
        full_name: "",
        email_address: "",
        phone_number: "",
        password: "",
      });
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <>
      <Header />
      <section className="flex justify-center h-[20em] pb-20">
        <div className="flex flex-col border shadow-black px-4 py-6 mt-[6em] rounded w-full">
          <h1 className="font-semibold text-3xl text-[#1c5a87] text-center pb-6">
            Welcome to Mariz
          </h1>
          <div className="flex flex-start w-full p-4 gap-4 rounded shadow">
            <input
              type="radio"
              className="w-4 h-4"
              name="auth-group"
              id="create_account"
              onChange={handleRadioChange}
            />
            <label className="font-semibold" htmlFor="create_account">
              Create account
            </label>
          </div>
          {isCreateAccount && (
            <form
              onSubmit={handleSignUpSubmit}
              className="flex flex-col mt-5 mb-3"
            >
              <label htmlFor="fullname" className="pb-2 font-semibold">
                First and last name
              </label>
              <input
                className="rounded shadow mb-3 p-3"
                type="text"
                name="full_name"
                id="fullname"
                onChange={handleChange}
                value={formData.full_name}
              />
              {SignUpFormErrors.full_name && (
                <div className="flex items-center mb-3">
                  <TiWarning className="text-red-500 mr-1" />
                  <span className="font-semibold text-[.9em] text-red-500">
                    {SignUpFormErrors.full_name}
                  </span>
                </div>
              )}
              <label htmlFor="email" className="pb-2 font-semibold">
                Email
              </label>
              <input
                className="rounded shadow mb-3 p-3"
                type="email"
                name="email_address"
                id="email"
                onChange={handleChange}
                value={formData.email_address}
              />
              {SignUpFormErrors.email_address && (
                <div className="flex items-center mb-3">
                  <TiWarning className="text-red-500 mr-1" />
                  <span className="font-semibold text-[.9em] text-red-500">
                    {SignUpFormErrors.email_address}
                  </span>
                </div>
              )}
              <label htmlFor="phone_number" className="pb-2 font-semibold">
                Phone number
              </label>
              <input
                className="rounded shadow mb-3 p-3"
                type="phone"
                name="phone_number"
                id="phone"
                onChange={handleChange}
                value={formData.phone_number}
              />
              {SignUpFormErrors.phone_number && (
                <div className="flex items-center mb-3">
                  <TiWarning className="text-red-500 mr-1" />
                  <span className="font-semibold text-[.9em] text-red-500">
                    {SignUpFormErrors.phone_number}
                  </span>
                </div>
              )}
              <label htmlFor="password" className="pb-2 font-semibold">
                Create a password
              </label>
              <input
                className="rounded shadow mb-3 p-3"
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleChange}
                value={formData.password}
              />
              {SignUpFormErrors.password && (
                <div className="flex items-center mb-3">
                  <TiWarning className="text-red-500 mr-1" />
                  <span className="font-semibold text-[.9em] text-red-500">
                    {SignUpFormErrors.password}
                  </span>
                </div>
              )}
              <div className="flex gap-3">
                <input
                  className="p-4 w-4"
                  type="checkbox"
                  id="showpassword"
                  name="showpassword"
                  onClick={togglePasswordVis}
                />
                <label className="" htmlFor="showpassword">
                  Show password
                </label>
              </div>
              <button
                type="submit"
                className="mt-4 p-4 rounded bg-[#1c5a87] text-white hover:bg-gray-600 hover:text-black"
              >
                Create account
              </button>
            </form>
          )}
          <div className="flex flex-start w-full p-4 gap-4 rounded shadow">
            <input
              className="w-4 h-4"
              type="radio"
              name="auth-group"
              id="sign_in"
              defaultChecked={!isCreateAccount}
              onChange={handleRadioChange}
            />
            <label className="font-semibold" htmlFor="sign_in">
              Sign in
            </label>
          </div>
          {!isCreateAccount && (
            <form onSubmit={handleSigninSubmit} className="flex flex-col py-4">
              <p className="pb-2 font-semibold">Email</p>
              <input
                className="rounded shadow mb-3 p-3"
                type="email"
                name="email_address"
                id="email"
                placeholder="Enter your Email..."
                onChange={handleChange}
                value={formData.email_address}
              />
              {SignInFormErrors.email_address && (
                <div className="flex items-center mb-3">
                  <TiWarning className="text-red-500 mr-1" />
                  <span className="font-semibold text-[.9em] text-red-500">
                    {SignInFormErrors.email_address}
                  </span>
                </div>
              )}
              <input
                className="rounded shadow p-3 mb-3"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
                onChange={handleChange}
                value={formData.password}
              />
              {SignInFormErrors.password && (
                <div className="flex items-center mb-3">
                  <TiWarning className="text-red-500 mr-1" />
                  <span className="font-semibold text-[.9em] text-red-500">
                    {SignInFormErrors.password}
                  </span>
                </div>
              )}
              {handleError && (
                <div className="flex items-center mb-3">
                  <TiWarning className="text-red-500 mr-1" />
                  <span className="font-semibold text-[.9em] text-red-500">
                    {handleError}
                  </span>
                </div>
              )}
              <button
                type="submit"
                className="mt-4 p-4 mb-4 rounded bg-[#1c5a87] text-white hover:bg-gray-600 hover:text-black"
              >
                Sign In
              </button>
              <div>
                <a href="#" className="font-bold text-[#1c5a87]">
                  Forgot password?
                </a>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
