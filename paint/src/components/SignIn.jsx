import Header from "./Header";
import { useState } from "react";

export default function SignIn() {
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVis = () =>{
   setPasswordShown(passwordShown ? false : true);
  }

  const handleRadioChange = (e) => {
    setIsCreateAccount(e.target.id === "create_account");
  };

  return (
    <>
      <Header />
      <section className="flex justify-center h-screen pb-20">
        <div className="flex flex-col border shadow-black px-4 py-6 mt-[6em] rounded w-full">
          <h1 className="font-semibold text-2xl text-center pb-6">
            Welcome to Mariz
          </h1>
          <div className="flex flex-start w-full p-4 gap-4 rounded shadow ">
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
            <form className="flex flex-col mt-5 mb-2">
              <label htmlFor="fullname" className="pb-2 font-semibold">
                First and last name
              </label>
              <input
                className="rounded shadow mb-3 p-3"
                type="text"
                name="fullname"
                id="fullname"
              />
              <label htmlFor="email" className="pb-2 font-semibold">
                Email
              </label>
              <input
                className="rounded shadow mb-3 p-3"
                type="email"
                name="email"
                id="email"
              />
              <label htmlFor="password" className="pb-2 font-semibold">
                Create a password
              </label>
              <input
                className="rounded shadow mb-3 p-3"
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
              />
              <div className="flex gap-3">
                <input
                  className="p-4 w-4"
                  type="checkbox"
                  id="showpassword"
                  name="showpassword"
                  onClick={togglePasswordVis}
                />
                <label htmlFor="showpassword">Show password</label>
              </div>
              <button className="mt-4 p-4 rounded bg-[#2D2D2D] text-white hover:bg-gray-600 hover:text-black">
                Create account
              </button>
            </form>
          )}
          <div className="flex flex-start w-full p-4 gap-4 rounded shadow ">
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
            <form className="flex flex-col py-4">
              <p className="pb-2 font-semibold">Email</p>
              <input
                className="rounded shadow mb-3 p-3"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email..."
              />
              <input
                className="rounded shadow p-3"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
              />
              <button className="mt-4 p-4 mb-4 rounded bg-[#2D2D2D] text-white hover:bg-gray-600 hover:text-black">
                Sign In
              </button>
              <div >
                <a href="#" className="font-bold">Forgot password?</a>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
