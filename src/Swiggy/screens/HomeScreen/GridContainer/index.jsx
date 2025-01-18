import Grocery from "./GroceryData";

function GridItem({ label, image }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        cursor: "pointer",
        alignItems: "center",
      }}
    >
      <img height="200px" src={image} />
      {/* <img height="200px" src={image} /> */}
      <span
        style={{
          fontWeight: "500",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}
export function GridContainer({ label, data }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "75px 150px",
      }}
    >
      <h2
        style={{
          display: "flex",
        }}
      >
        {label}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "40px",
          overflow: "scroll",
          scrollbarWidth: "none",
        }}
      >
        {data.map((data) => {
          return <GridItem label={data.label} image={data.image} />;
        })}
      </div>
    </div>
  );
}
