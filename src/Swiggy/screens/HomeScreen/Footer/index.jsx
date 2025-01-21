export function Footer() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "550px",
          marginLeft: "230px",
        }}
      >
        <img
          src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
          height={"100px"}
          width={"150px"}
        />
        <span>&copy; {new Date().getFullYear()} ADITYA JAIS</span>
      </div>
      <div
        style={{
          height: "1px",
          margin: "0px 100px",
          backgroundColor: "gray",
        }}
      ></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "30px 205px 30px",
          //   marginLeft: "180px",
        }}
      >
        <h2>For better experience, download the Swiggy app now</h2>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" />
      </div>
    </div>
  );
}