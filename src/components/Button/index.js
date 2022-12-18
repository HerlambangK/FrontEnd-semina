import React from "react";
// import Button from "react-bootsrap";

// function Button({ onClick, children, variant }) {
//   return (
//     <Button onClick={onClick} variant={variant}>
//       {children}
//     </Button>
//   );
// }
function Button({ onClick, children, variant }) {
  // console.log("children : ", children);
  return (
    <button onClick={onClick} variant={variant}>
      {children}
    </button>
  );
}

export default Button;
