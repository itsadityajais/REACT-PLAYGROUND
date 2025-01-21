import {
  FaBuilding,
  FaSearch,
  FaTag,
  FaQuestionCircle,
  FaSignInAlt,
  FaShoppingCart,
} from "react-icons/fa";

export function RestaurantListPageHeader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 120px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <a href="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/050/816/833/non_2x/swiggy-transparent-icon-free-png.png"
            alt="Swiggy Logo"
            height="80px"
            width="80px"
          />
        </a>
        <input
          placeholder="Green Glen Layout, Bellandur"
          style={{
            padding: "8px 18px",
            fontSize: "14px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
          }}
        />
      </div>

      <div>
        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
            gap: "50px",
            margin: 0,
            padding: 0,
          }}
        >
          <li
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaBuilding /> Swiggy Corporate
          </li>
          <li
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaSearch /> Search
          </li>
          <li
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaTag /> Offers
          </li>
          <li
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaQuestionCircle /> Help
          </li>
          <li
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaSignInAlt /> Sign In
          </li>
          <li
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <FaShoppingCart /> Cart
          </li>
        </ul>
      </div>
    </div>
  );
}
