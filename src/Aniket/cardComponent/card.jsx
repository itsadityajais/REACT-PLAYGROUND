import card from "./data";
export function Card() {
  function PaymentBreakup({ sectionRow }) {
    return (
      <div>
        {sectionRow.map((eachSection) => (
          <div
            style={{
              marginBottom: "20px",
              padding: 20,
              backgroundColor: "white",
              minHeight: 50,
              borderRadius: 10,
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            {eachSection.map((sectionItem) => (
              <div>
                {sectionItem.beforeRow}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <div>{sectionItem.text}</div>
                  <div>{sectionItem.amount}</div>
                </div>
                {sectionItem.afterRow}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{ padding: 20 }}>
      <PaymentBreakup sectionRow={card} />
    </div>
  );
}
