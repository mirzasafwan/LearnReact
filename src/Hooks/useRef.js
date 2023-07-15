// import React, { useRef } from "react";

// const UseRef = () => {
//   const emailref = useRef();
//   const passwordref = useRef();
//   function onSubmit(e) {
//     e.preventDefault();
//     console.log({
//       email: emailref.current.value,
//       password: passwordref.current.value,
//     });
//   }
//   return (
//     <div>
//       <div className="container">
//         <div className="w-50">
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input type="email" ref={emailref} className="form-control" />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Password</label>
//             <input type="password" ref={passwordref} className="form-control" />
//           </div>
//           <button type="submit" onClick={onSubmit} className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UseRef;

import React, { useRef } from "react";

const UseRef = () => {
  const dataRef = useRef();
  const handleButtonClick = () => {
    dataRef.current = "Hello, World!";
    console.log(dataRef.current);
    // eslint-disable-next-line react/jsx-no-undef
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Update Data</button>
      <p>{dataRef.current}</p>
    </div>
  );
};

export default UseRef;
