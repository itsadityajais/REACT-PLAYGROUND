import { NavData } from "./NavData";

function Tiles({ label, description, offer, images }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "280px",
        minWidth: "250px",
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <div
        style={{
          marginTop: "25px",
          marginBottom: "10px",
          fontSize: "25px",
          fontWeight: "bold",
          marginLeft: "10px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginBottom: "10px",
          fontSize: "25px",
          fontWeight: "bold",
          color: "gray",
          marginLeft: "10px",
        }}
      >
        {description}
      </div>
      <div
        style={{
          marginBottom: "10px",
          fontSize: "25px",
          fontWeight: "bold",
          color: "orange",
          marginLeft: "10px",
        }}
      >
        {offer}
      </div>
      <img
        style={{
          marginLeft: "130px",
          marginTop: "20px",
          minHeight: "100px",
          minWidth: "100px",
        }}
        src={images}
        height={"100px"}
        width={"100px"}
      />
    </div>
  );
}

// const tiles = [];

// for (let i = 0; i < NavData.length; i++) {
//   let item = NavData[i];
//   tiles.push(
//     <Tiles
//       label={item.label}
//       description={item.description}
//       offer={item.offer}
//     />
//   );
// }

// let newArray = NavData.map((item) => {
//   return (
//     <Tiles
//       label={item.label}
//       description={item.description}
//       offer={item.offer}
//     />
//   );
// });

export function NavTiles() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {NavData.map((data) => {
        return (
          <Tiles
            label={data.label}
            description={data.description}
            offer={data.offer}
            images={data.images}
          />
        );
      })}
      {/* {newArray} */}
    </div>
  );
}
