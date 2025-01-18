import React from "react";
import "./NavBar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <div>
        <a href="/">
          <img
            src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
            alt="Swiggy"
          />
        </a>
      </div>
      <div className="navbar-links">
        <span>Swiggy Corporate</span>
        <span>Partner with us</span>
        <button>Get the App</button>
        <button>Sign In</button>
      </div>
    </div>
  );
}

// import React from "react";
// export function NavBar() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         marginBottom: "50px",
//         padding: "32px 0",
//         position: "relative",
//         background: "#ff5200",
//       }}
//     >
//       <div>
//         <a href="/">
//           <img
//             src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
//             alt="Swiggy"
//             height={"50px"}
//             width={"180px"}
//           />
//         </a>
//       </div>
//       <div>
//         <span>Swiggy Corporate</span>
//         <span>Partner with us</span>
//         <button>Get the App</button>
//         <button>Sign In</button>
//       </div>
//     </div>
//   );
// }
