import React, { useState } from "react";

const Hook3 = (initialvalue) => {
  const [value, setValue] = useState(initialvalue);

  const reset = () => {
    setValue("");
  };

  const bind = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};

export default Hook3;
