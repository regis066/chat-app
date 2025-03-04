import React, { useState } from "react";
import { Link } from "react-router";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputs({ ...inputs, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    login(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full bg-transparent p-6 rounded-lg shadow-md bg-clip-padding backdrop-blur-lg">
        <h1 className="text-3xl text-center text-gray-300 font-semibold">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleOnSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleInputChange}
              className="input input-bordered w-full h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleInputChange}
              className="input input-bordered w-full h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm hover:text-blue-600 hover:underline mt-2 inline-block"
          >
            {"Don't"} have an account ?
          </Link>

          <div>
            <button
              type="submit"
              className="btn btn-sm btn-block mt-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// STARTER CODE FOR THIS FILE
// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full bg-transparent p-6 rounded-lg shadow-md bg-clip-padding backdrop-blur-lg">
//         <h1 className="text-3xl text-center text-gray-300 font-semibold">
//           Login
//           <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="label-text text-base">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="input input-bordered w-full h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="label-text text-base">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="input input-bordered w-full h-10"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:text-blue-600 hover:underline mt-2 inline-block"
//           >
//             {"Don't"} have an account ?
//           </a>

//           <div>
//             <button className="btn btn-sm btn-block mt-2">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
