import { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);

  const handleTip = (newTip) => {
    console.log("this is new tip", newTip);
    setTip(newTip);
  };
  const handlePeople = (numberOfpeople) => {
    setPeople(numberOfpeople);
  };
  const handleBill = (newBill) => {
    setBill(newBill);
  };
  const totalTipPerPerson = (person, tip, bill) => {
    const totalTip = (bill * tip) / 100;
    const tipPerPerson = totalTip / person;
    return tipPerPerson.toFixed(2);
  };
  const calculatetotalPerPerson = (tip, people, bill) => {
    const tipAmount = (bill * tip) / 100;
    const totalAmount = bill + tipAmount;
    const totalPerPerson = totalAmount / people;
    return totalPerPerson.toFixed(2);
  };
  const calculateTipPerPerson = totalTipPerPerson(people, tip, bill);
  const calTotalperPersons = calculatetotalPerPerson(tip, people, bill);
  
  return (
    <div className="billbox" style={{ display: "flex", padding: "50px" }}>
      {/* Add LeftBox and RightBox component here */}
      <LeftBox
        handleTip={handleTip}
        handleBill={handleBill}
        handlePeople={handlePeople}
        bill={bill}
        people={people}
      />
      <RightBox
        tipAmount={calculateTipPerPerson}
        handleBill={handleBill}
        handlePeople={handlePeople}
        handleTip={handleTip}
        total={calTotalperPersons}
      />
    </div>
  );
};

export default BillPage;
