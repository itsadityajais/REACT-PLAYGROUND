export function Deals({ title, image, offer, coupon }) {
  return (
    <div>
      {/* <span>{title}</span> */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "300px",
            // backgroundColor: "red",
            border: "1px solid #D9DADB",
            borderRadius: "20px",
            gap: "15px",
            padding: "12px",
            cursor: "pointer",
          }}
        >
          <img src={image} height={"50px"} width={"50px"} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "20px",
              letterSpacing: "-0.3px",
            }}
          >
            <span
              style={{
                fontWeight: "700",
                fontSize: "18px",

                color: "black",
              }}
            >
              {offer}
            </span>
            <span
              style={{ fontWeight: "700", fontSize: "14px", color: "gray" }}
            >
              {coupon}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
