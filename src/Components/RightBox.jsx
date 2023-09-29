const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {
  const handleClick = () => {
    handleBill(0);
    handlePeople(1);
    handleTip(0);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: "10px",
      }}
    >
      {/* Add tip Amount and total here */}
      {/* Add button to RESET */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          background: "#00474b",
          color: "white",
          width: "100%",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          <h5>Tip Amount/per person</h5>
          <h1 className="tipAmount">{tipAmount}</h1>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <h5>Total/person</h5>
          <h1 className="TotalAmount">{total}</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{ width: "105px", height: "40px" }}
            className="Reset"
            onClick={handleClick}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightBox;
