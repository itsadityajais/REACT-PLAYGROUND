import { Line } from "../../../components/Line";
import { useState } from "react";
import { RiShoppingBag4Line } from "react-icons/ri";

export function RestaurantMenu({
  title,
  price,
  description,
  image,
  rating,
  add,
  subtract,
}) {
  return (
    <div>
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

          <div
            style={{
              display: "flex",
              alignItems: "center",
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
            }}
          >
            <button
              style={{
                height: "30px",
                width: "100%",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "white",
                fontSize: "20px",
                color: "#19A672",
                cursor: "pointer",
              }}
              onClick={() => subtract(price)}
            >
              -
            </button>
            <span>ADD</span>
            <button
              style={{
                height: "30px",
                width: "100%",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "white",
                fontSize: "20px",
                color: "#19A672",
                cursor: "pointer",
              }}
              onClick={() => add(price)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
}

export function RestaurantMenuContainer({ data }) {
  const [currFilter, setFilter] = useState(null);
  const [sum, setSum] = useState(0);

  function handleAdd(price) {
    setSum(sum + price);
  }
  function handleSubtract(price) {
    setSum(sum - price);
  }

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
      {sum > 0 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "fixed",
            bottom: 0,
            zIndex: 1000,
            fontSize: "15px",
            color: "#fff",
            backgroundColor: "#5FB246",
            minHeight: "50px",
            minWidth: "790px",
            cursor: "pointer",
          }}
        >
          <span style={{ marginLeft: "20px", fontWeight: "500" }}>
            Total Price: &#8377; {sum}
          </span>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "20px",
              gap: "2px",
            }}
          >
            <span style={{ fontWeight: "800" }}>VIEW CART</span>
            <RiShoppingBag4Line size={20} />
          </div>
        </div>
      ) : null}

      {filteredData.map((item) => (
        <RestaurantMenu
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          rating={item.rating}
          add={handleAdd}
          subtract={handleSubtract}
        />
      ))}
    </div>
  );
}
