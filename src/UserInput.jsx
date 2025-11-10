// import { forwardRef } from "react";

// const UserInput = forwardRef((ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });

// export default UserInput;

const UserInput = (props) => {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  );
};
export default UserInput;
