export default function SectionHeader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          margin: "20",
          backgroundColor: "green",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
          }}
        >
          <h2>Collections</h2>
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Patna, based on trends
          </p>
        </div>
        <div
          style={{
            backgroundColor: "blue",
          }}
        >
          <button>All Collections</button>
        </div>
      </div>
    </>
  );
}
