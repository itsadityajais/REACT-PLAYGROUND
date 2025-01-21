export function RestaurantList({ name, rating, address, photos, cuisines }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        // margin: "0px 150px",
      }}
    >
      <img
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "10%",
          objectFit: "cover",
        }}
        src={photos}
        height={"180px"}
        width={"270px"}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "15px",
          marginLeft: "12px",
          // backgroundColor: "red",
          maxWidth: "255px",
          gap: "5px",
        }}
      >
        <span>{name}</span>
        <span>{rating}</span>
        <span
          style={{
            whiteSpace: "nowrap",
            maxWidth: "255px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {cuisines}
        </span>
        <span>{address}</span>
      </div>
    </div>
  );
}

export function RestaurantListContainer({ label, data, displayType }) {
  return (
    <div style={{ margin: "50px 150px 50px" }}>
      <h2
        style={{
          display: "flex",
        }}
      >
        {label}
      </h2>
      <div
        style={
          displayType == "sliding"
            ? {
                display: "flex",
                gap: "30px",
                overflow: "scroll",
                scrollbarWidth: "none",
                marginTop: "30px",
              }
            : {
                display: "flex",
                flexWrap: "wrap",
                gap: "30px",
                scrollbarWidth: "none",
                marginTop: "30px",
              }
        }
      >
        {data.map((item) => {
          return (
            <RestaurantList
              name={item.name}
              rating={item.rating}
              cuisines={item.cuisines}
              address={item.address.fullAddress}
              photos={item.photos[0]}
            />
          );
        })}
        {/* {data.map((_data) => {
          return (
            <RestaurantList
              label={_data.label}
              rating={_data.rating}
              description={_data.description}
              location={_data.location}
              image={_data.image}
            />
          );
        })} */}
      </div>
    </div>
  );
}
