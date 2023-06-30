import React, { useEffect, useState } from "react";
import './convertor.css'
function Results(props) {
  const { select1Ref, select2Ref, inputValue } = props;
  const [useValue, setValue] = useState(0);

  const handleCalculations = (ref1, ref2, value) => {
    const ifHandler = (val1, val2) => {
      return ref1.current.value === val1 && ref2.current.value === val2;
    };
    const setValues = (val) => {
      return setValue(`${val} ${ref2.current.value}`);
    };

    if (ifHandler("cm", "m")) {
      value = value * 0.01;
      setValues(value);
    }

    if (ifHandler("cm", "yd")) {
      value = value * 0.010936133;
      setValues(value);
    }
    if (ifHandler("cm", "miles")) {
      value = value * 0.00000062137119223733;
      setValues(value);
    }
    if (ifHandler("cm", "ft")) {
      value = value * 0.32808399;
      setValues(value);
    }
    if (ifHandler("cm", "in")) {
      value = value * 0.393701;
      setValues(value);
    }
    if (ifHandler("cm", "cm")) {
      value = value * 1;
      setValues(value);
    }
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    /**ADDING FUNCIONALITY TO THE METER OPTIONS */
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    if (ifHandler("m", "cm")) {
      value = value / 0.01;
      setValues(value);
    }
    if (ifHandler("m", "yd")) {
      value = value * 1.0936133;
      setValues(value);
    }
    if (ifHandler("m", "miles")) {
      value = value * 0.000621371192;
      setValues(value);
    }
    if (ifHandler("m", "ft")) {
      value = value * 3.2808399;
      setValues(value);
    }
    if (ifHandler("m", "in")) {
      value = value * 39.3700787;
      setValues(value);
    }
    if (ifHandler("m", "m")) {
      value = value * 1;
      setValues(value);
    }
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    /**ADDING FUNCIONALITY TO THE YARDS OPTIONS */
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    if (ifHandler("yd", "cm")) {
      value = value / 91.44;
      setValues(value);
    }
    if (ifHandler("yd", "yd")) {
      value = value / 1;
      setValues(value);
    }
    if (ifHandler("yd", "miles")) {
      value = value * 0.000568181818;
      setValues(value);
    }
    if (ifHandler("yd", "ft")) {
      value = value / 3;
      setValues(value);
    }
    if (ifHandler("yd", "in")) {
      value = value / 36;
      setValues(value);
    }
    if (ifHandler("yd", "m")) {
      value = value * 0.9144;
      setValues(value);
    }
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    /**ADDING FUNCIONALITY TO THE MILES OPTIONS */
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    if (ifHandler("miles", "cm")) {
      value = value / 160934.4;
      setValues(value);
    }
    if (ifHandler("miles", "yd")) {
      value = value / 1760;
      setValues(value);
    }
    if (ifHandler("miles", "miles")) {
      value = value / 1;
      setValues(value);
    }
    if (ifHandler("miles", "ft")) {
      value = value / 0.01;
      setValues(value);
    }
    if (ifHandler("miles", "in")) {
      value = value / 5280;
      setValues(value);
    }
    if (ifHandler("miles", "m")) {
      value = value / 1609.344;
      setValues(value);
    }
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    /**ADDING FUNCIONALITY TO THE INCH OPTIONS */
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    if (ifHandler("in", "cm")) {
      value = value / 2.54;
      setValues(value);
    }
    if (ifHandler("in", "yd")) {
      value = value * 0.0277777778;
      setValues(value);
    }
    if (ifHandler("in", "miles")) {
      value = value * 0.0000157828283;
      setValues(value);
    }
    if (ifHandler("in", "ft")) {
      value = value * 0.0833333333;
      setValues(value);
    }
    if (ifHandler("in", "in")) {
      value = value * 1;
      setValues(value);
    }
    if (ifHandler("in", "m")) {
      value = value * 0.0254;
      setValues(value);
    }
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    /**ADDING FUNCIONALITY TO THE FEET OPTIONS */
    /**-------------------------------------------------- */
    /**-------------------------------------------------- */
    if (ifHandler("ft", "cm")) {
      value = value / 30.48;
      setValues(value);
    }
    if (ifHandler("ft", "yd")) {
      value = value * 0.333333333;
      setValues(value);
    }
    if (ifHandler("ft", "miles")) {
      value = value * 0.000189393939;
      setValues(value);
    }
    if (ifHandler("ft", "ft")) {
      value = value * 1;
      setValues(value);
    }
    if (ifHandler("ft", "in")) {
      value = value / 12;
      setValues(value);
    }
    if (ifHandler("ft", "m")) {
      value = value * 0.3048;
      setValues(value);
    }
  };

  useEffect(() => {
    handleCalculations(select1Ref, select2Ref, inputValue);
  });

  return (
    <div className="results-cont">
      <h3>{useValue}</h3>
    </div>
  );
}

export default Results;
