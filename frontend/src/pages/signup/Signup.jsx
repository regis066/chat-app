import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full bg-transparent p-6 rounded-lg shadow-md bg-clip-padding backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
            />
          </div>
          {/* Gender box */}
          <GenderCheckbox />
          <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
            Already have an account?
          </a>
          <div>
            <button className="btn btn-block mt-2 btn-sm border-slate-700">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// STARTER CODE FOR SIGNUP
// import React from "react";
// import GenderCheckbox from "./GenderCheckbox";

// const Signup = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full bg-transparent p-6 rounded-lg shadow-md bg-clip-padding backdrop-blur-lg">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500"> ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="w-full input input-bordered  h-10"
//             />
//           </div>

//           <div>
//             <label className="label p-2 ">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="johndoe"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           {/* Gender box */}
//           <GenderCheckbox />
//           <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block">
//             Already have an account?
//           </a>
//           <div>
//             <button className="btn btn-block mt-2 btn-sm border-slate-700">Signup</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
