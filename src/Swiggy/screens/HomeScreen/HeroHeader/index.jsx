export function HeroHeader() {
  return (
    <div
      style={{
        width: "50%",
        textAlign: "center",
        margin: "0px auto",
        marginBottom: "10px",
        marginTop: "80px",
      }}
    >
      <h1 style={{ color: "white", fontSize: "48px" }}>
        Order food & groceries. Discover best restaurants. Swiggy it!
      </h1>
      <div style={{ marginBottom: "60px" }}>
        <select
          style={{
            height: "60px",
            width: "250px",
            borderRadius: "16px",
            border: "1.5px solid rgba(2, 6, 12, 0.15)",
            marginRight: "20px",
          }}
          title="Select Location"
        >
          <option value="Bengaluru">Bengaluru</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Hansdiha">Hansdiha</option>
        </select>
        <input
          type="text"
          placeholder="Search "
          style={{
            height: "54px",
            width: "400px",
            borderRadius: "16px",
            border: "1.5px solid rgba(2, 6, 12, 0.15)",
          }}
        />
      </div>
    </div>
  );
}
