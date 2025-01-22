import { Line } from "../../../components/Line";
import { useState } from "react";

export function RestaurantMenu({ title, price, description, image, rating }) {
  const [sum, setSum] = useState(0);
  function AddCartItems(price) {
    setSum(sum + price);
  }
  return (
    <div>
      <h1>{sum}</h1>
      <div
        style={{
          display: "flex",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "620px",
            //   width: "70%",
            // paddingRight: "80px",
            //   backgroundColor: "yellow",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "700",
              // lineHeight: "30px",
            }}
          >
            {title}
          </span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "500",
              marginTop: "6px",
            }}
          >
            &#8377;{price}
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "#19A672",
              margin: "7px 0px",
            }}
          >
            {rating}
          </span>
          <span
            style={{
              fontSize: "16px",
              fontWeight: "200",
              maxWidth: "500px",
            }}
          >
            {description}
          </span>
        </div>
        <div style={{ position: "relative" }}>
          <img
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 10px",
              borderRadius: "10%",
              objectFit: "cover",
            }}
            height={"150px"}
            width={"150px"}
            src={image}
          />
          <button
            style={{
              height: "40px",
              width: "100px",
              borderRadius: "10px",
              border: "1px solid #DFDFE0",
              position: "absolute",
              top: "125px",
              left: "25px",
              backgroundColor: "white",
              color: "#19A672",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={() => AddCartItems(price)}
          >
            ADD
          </button>
        </div>
      </div>
      <Line />
    </div>
  );
}

export function RestaurantMenuContainer({ data }) {
  const [currFilter, setFilter] = useState(null);

  const filteredData = currFilter
    ? data.filter((item) => {
        return item.type == currFilter;
      })
    : data;

  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        <button
          style={{
            height: "30px",
            width: "60px",
            borderRadius: "50px",
            border: "0.5px solid #676A6D",
            color: currFilter == null ? "white" : "black",
            backgroundColor: currFilter == null ? "#FF5200" : "white",
          }}
          onClick={() => setFilter(null)}
        >
          All
        </button>

        <button
          style={{
            height: "30px",
            width: "60px",
            borderRadius: "50px",
            border: "0.5px solid #676A6D",
            marginBottom: "10px",
            color: currFilter == "VEG" ? "white" : "black",
            backgroundColor: currFilter == "VEG" ? "#FF5200" : "white",
          }}
          onClick={() => setFilter("VEG")}
        >
          Veg
        </button>
        <button
          style={{
            height: "30px",
            width: "80px",
            borderRadius: "50px",
            border: "0.5px solid #676A6D",
            color: currFilter == "NON-VEG" ? "white" : "black",
            backgroundColor: currFilter == "NON-VEG" ? "#FF5200" : "white",
          }}
          onClick={() => setFilter("NON-VEG")}
        >
          Non-Veg
        </button>
      </div>

      {filteredData.map((item) => (
        <RestaurantMenu
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
