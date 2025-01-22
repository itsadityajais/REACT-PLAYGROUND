import { useState } from "react";
import { Deals } from "../../components/Deals";
import { RestaurantListPageHeader } from "../RestaurantListScreen/RestaurantListPageHeader";
import Restaurant_Menu from "./Restaurant_menu";
import { RestaurantMenuContainer } from "./RestaurantMenu";
export function RestaurantMenuScreen() {
  return (
    <div>
      <RestaurantListPageHeader />
      <div
        style={{
          height: "150px",
          width: "750px",
          border: "1px solid #D9DADB",
          borderRadius: "10px",
          margin: "100px 350px 50px 350px",
          //   marginLeft: "350px",
          //   marginRight: "350px",
        }}
      ></div>

      <div style={{ marginLeft: "350px", marginRight: "350px" }}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "50px",
            //   width: "50%",
            //   marginLeft: "350px",
            //   marginRight: "350px",
            overflow: "scroll",
            scrollbarWidth: "none",
            // backgroundColor: "rebeccapurple",
          }}
        >
          <Deals
            title={"Deals for You"}
            image={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/deal-of-day"
            }
            offer={"Items At ₹149"}
            coupon={"ON SELECT ITEMS"}
          />
          <Deals
            image={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
            }
            offer={"50% Off Upto ₹100"}
            coupon={"USE SWIGGY50"}
          />
          <Deals
            image={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
            }
            offer={"60% Off Upto ₹100"}
            coupon={"USE TRYNEW"}
          />
          <Deals
            image={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
            }
            offer={"Flat ₹125 Off"}
            coupon={"USE FLAT125"}
          />
          <Deals
            image={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
            }
            offer={"Flat ₹150 Off"}
            coupon={"USE FLAT150"}
          />
        </div>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0px",
            fontSize: "13px",
            color: "#676A6D",
          }}
        >
          ~ M E N U ~
        </span>
        <input
          style={{
            width: "100%",
            height: "40px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "#F2F2F3",
            marginBottom: "20px",
          }}
          placeholder="Search For Dishes"
        />

        <RestaurantMenuContainer data={Restaurant_Menu} />
      </div>
    </div>
  );
}
