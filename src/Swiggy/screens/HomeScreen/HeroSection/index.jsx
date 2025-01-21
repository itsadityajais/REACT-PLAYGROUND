export function HeroSection({ children }) {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#FF5200",
        minHeight: "800px",
        marginBottom: "75px",
      }}
    >
      {children}
    </div>
  );
}
