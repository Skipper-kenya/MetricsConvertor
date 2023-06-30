import React, { useRef, useState } from "react";
import Selector from "./Selector";
import Results from "./Results";
import "./convertor.css";
function ConvertorCover() {
  const [selector1, setSelector1] = useState("cm");
  const [selector2, setSelector2] = useState("m");
  const select_1 = useRef("cm");
  const select_2 = useRef("m");
  const [submitValue, setSubValue] = useState(0);
  const [select, selectValue] = useState({
    select1: "",
    select2: "",
  });

  const handleSelect1 = (e) => {
    selectValue({ select1: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubValue(select.select1);
  };

  return (
    <div className="convertor-cont">
        <h2>Metric Units Convertor</h2>
      <div className="con-handler">
        <Selector
          select1Ref={select_1}
          select2Ref={select_2}
          select1State={selector1}
          select2State={selector2}
          select1Change={setSelector1}
          select2Change={setSelector2}
        />
        <div className="forms">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={select.select1}
              onChange={handleSelect1}
            />
            <button onSubmit={handleSubmit}>Convert</button>
          </form>
        </div>
        <Results
          select1Ref={select_1}
          select2Ref={select_2}
          inputValue={submitValue}
        />
      </div>
    </div>
  );
}

export default ConvertorCover;
