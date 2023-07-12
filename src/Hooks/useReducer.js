// import React, { useReducer } from "react";
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "Incremeant":
//       return { count: state.count + 1, showtext: state.showtext };
//     case "Toggle":
//       return { count: state.count, showtext: !state.showtext };
//     default:
//       return state;
//   }
// };
// const UseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, { count: 0, showtext: false });
//   return (
//     <div>
//       <h3>{state.count}</h3>

//       <button
//         onClick={() => {
//           dispatch({ type: "Incremeant" });
//           dispatch({ type: "Toggle" });
//         }}
//       >
//         Click Me
//       </button>
//       {state.showtext && <p>This is a text</p>}
//     </div>
//   );
// };

// export default UseReducer;

import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "Incremeant":
      return { count: state.count + 1 };
    case "Decremeant":
      if (state.count > 0) {
        return { count: state.count - 1 };
      }
      return { count: state.count };
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h3>{state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "Incremeant" });
        }}
      >
        Incremeant
      </button>
      <button
        onClick={() => {
          dispatch({ type: "Decremeant" });
        }}
      >
        Decremeant
      </button>
    </div>
  );
};

export default UseReducer;
