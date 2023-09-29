import React, { useState } from "react";
const RightBox = ({
  tipAmount,
  total,
  people,
  handleBill,
  handleTip,
  handlePeople,
}) => {
  const [billTotal, setBillTotal] = useState(total);
  const handleClick = () => {
    handleBill(0);
    handlePeople(1);
    handleTip(0);
    setBillTotal(0);
  };
  return (
    <div style={{ flex: 1, padding: "10px" }}>
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
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          <h5>Tip Amount/per person</h5>
          <h1 className="tipAmount">{tipAmount}</h1>
        </div>
        <div style={{ display: "flex", gap: "5px" }}>
          <h5>Total/person</h5>
          <h1 className="TotalAmount">{billTotal}</h1>
        </div>
        <button className="Reset" onClick={handleClick}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default RightBox;
