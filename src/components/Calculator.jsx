import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

function Calculator() {
  const [heightInput, setHeight] = useState();
  const [weightInput, setWeight] = useState();
  const [bmiDisplay, setBmiDisplay] = useState();
  const [result, setResult] = useState();
  const [sug, setSug] = useState();

  const heightfunc = (e) => {
    setHeight(e.target.value);
  };

  const weightfunc = (e) => {
    setWeight(e.target.value);
  };

  const bmi = () => {
    const bmiCal = weightInput / (((heightInput / 100) * heightInput) / 100);
    setBmiDisplay(bmiCal);
  };

  useEffect(() => {
    if (bmiDisplay < 18.5) {
      setResult("You Are Under Weight.");
      setSug("Need Of Healthy Diet.");
    } else if (bmiDisplay > 18.5 && bmiDisplay < 25) {
      setResult("Your Weight Is Normal.");
      setSug("Maintain Your Diet Routine.");
    } else if (bmiDisplay > 25 && bmiDisplay < 29.9) {
      setResult("You Are Over Weighted.");
      setSug("Avoid Junk Food & Do Workout.");
    } else if (bmiDisplay > 30) {
      setResult("You Are Obese.");
      setSug("Do Hard Workout & Consult To Nutritionist.");
    }
  }, [bmiDisplay]);

  return (
    <>
      <div className="container1">
        <h1 className="heading">Body Mass Index (BMI) Calculator</h1>
        <form>
          <h3>
            Height(cm):{" "}
            <TextField
              type="Number"
              label={"Enter Your Height"}
              placeholder="Enter Your Height"
              id="margin-none"
              color="secondary"
              value={heightInput}
              onChange={heightfunc}
            />
          </h3>

          <h3>
            Weight(Kg):{" "}
            <TextField
              label="Enter Your Weight"
              color="secondary"
              type="Number"
              placeholder="Enter Your Weight"
              value={weightInput}
              onChange={weightfunc}
            />
          </h3>

          <Button variant="contained" onClick={bmi}>
            Calculate
          </Button>
        </form>

        <div className="result">
          <h3>Your BMI is: {bmiDisplay}</h3>
          <h3>Your Result is: {result}</h3>
          <h3>Suggestion: {sug}</h3>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Calculator;
