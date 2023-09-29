import React from "react";
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}
    >
      {/* Add input for bill */}
      <div style={{ width: "100%" }}>
        <h5>Bill</h5>
        <input
          className="bill_input"
          onChange={(e) => handleBill(Number(e.target.value))}
          value={bill}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "5px",
        }}
      >
        <button
          onClick={() => handleTip(5)}
          style={{ width: "50px", height: "50px" }}
        >
          5%
        </button>
        <button
          onClick={() => handleTip(10)}
          style={{ width: "50px", height: "50px" }}
        >
          10%
        </button>
        <button
          onClick={() => handleTip(15)}
          style={{ width: "50px", height: "50px" }}
        >
          15%
        </button>
        <button
          onClick={() => handleTip(25)}
          style={{ width: "50px", height: "50px" }}
        >
          25%
        </button>
        <button
          onClick={() => handleTip(50)}
          style={{ width: "50px", height: "50px" }}
        >
          50%
        </button>
        <input
          style={{ width: "40px", height: "45px" }}
          placeholder="Custom"
          className="custom"
          onChange={(e) => handleTip(Number(e.target.value))}
        />
      </div>
      <div style={{ width: "100%" }}>
        <h5>Number of People </h5>
        <input
          className="people"
          placeholder="select people"
          value={people}
          onChange={(e) => handlePeople(Number(e.target.value))}
        />
      </div>
      {/* Add buttons for % of tip */}
      {/* Add input for no.of peoples */}
    </div>
  );
};

export default LeftBox;
