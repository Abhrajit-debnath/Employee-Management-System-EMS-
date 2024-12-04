import { React, useState } from "react";
const Login = ({ handelLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handelLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-700 p-20 rounded-xl">
        <h2 className="text-center font-primary text-2xl text-emerald-500 pb-5 font-semibold">
          Welcome !
        </h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-gray-600 rounded-full py-3 px-5 text-lg font-primary placeholder:text-gray-400 "
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-gray-600 rounded-full py-3 px-5 text-lg font-primary placeholder:text-gray-400 mt-5 "
            type="password"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="font-primary mt-5 text-white outline-none bg-emerald-600 w-full  rounded-full py-3 px-5 text-xl placeholder:text-white hover:bg-emerald-700 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
