import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App";

const ContextHook2 = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} {channel}
    </div>
  );
};

export default ContextHook2;
