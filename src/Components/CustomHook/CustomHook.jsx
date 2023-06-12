import React from "react";
import DocTitle1 from "./Hook1/docTitle1";
import DocTitle2 from "./Hook1/docTitle2";
import Counter2 from "./Hook2/Counter2";
import Counter1 from "./Hook2/Counter1";
import Form from "./Hook3/Form";

const CustomHook = () => {
  return (
    <div>
      <DocTitle1 />
      <DocTitle2 />
      <Counter1 />
      <Counter2 />

      <Form />
    </div>
  );
};

export default CustomHook;
