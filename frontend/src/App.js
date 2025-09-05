import React, { useState } from "react";
import axios from "axios";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleSum = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/sum", {
        num1: Number(num1),
        num2: Number(num2),
      });
      setResult(response.data.result);
    } catch (error) {
      alert("Error calculating sum");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleSum}>Calculate Sum</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default App;