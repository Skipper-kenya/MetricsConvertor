import React from "react";
import "./convertor.css";
const Selector = (props) => {
  const OptionsCode = (op) => {
    return <option value={op.value}>{op.value}</option>;
  };

  const handleSelect1 = (e) => {
    props.select1Change(e.target.value);
  };
  const handleSelect2 = (e) => {
    props.select2Change(e.target.value);
  };
  return (
    <div className="selector">
      <select
        className="select"
        ref={props.select1Ref}
        value={props.select1State}
        onChange={handleSelect1}
      >
        <OptionsCode value="cm" />
        <OptionsCode value="m" />
        <OptionsCode value="yd" />
        <OptionsCode value="miles" />
        <OptionsCode value="ft" />
        <OptionsCode value="in" />
      </select>
      <select
        className="select"
        ref={props.select2Ref}
        value={props.select2State}
        onChange={handleSelect2}
      >
        <OptionsCode value="cm" />
        <OptionsCode value="m" />
        <OptionsCode value="yd" />
        <OptionsCode value="miles" />
        <OptionsCode value="ft" />
        <OptionsCode value="in" />
      </select>
    </div>
  );
};

export default Selector;
