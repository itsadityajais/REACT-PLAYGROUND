export const card = [
  [
    {
      id: 1,
      text: "Apply Amount",
      amount: 6513,
      beforeRow: (
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "gray",
            marginBottom: "10px",
          }}
        ></div>
      ),
    },
    {
      id: 2,
      text: "TDS Amount",
      afterRow: (
        <div
          style={{
            height: "1px",
            width: "100%",
            backgroundColor: "gray",
            marginBottom: "10px",
          }}
        ></div>
      ),
      amount: 89.64,
    },

    {
      id: 3,
      text: "Net Amount",
      amount: 6423.36,
    },
  ],
  [
    {
      id: 4,
      text: "Unapplied Amount",
      amount: 14.51,
    },
    {
      id: 5,
      text: "TDS Amount",
      amount: 6423.36,
    },
  ],
  [
    {
      id: 6,
      text: "Remaning Amount",
      amount: 6408.85,
    },
  ],
];

export default card;
