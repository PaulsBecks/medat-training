import React from "react";

import "./Button.css";

export default props => (
  <button className="mt-de-button" {...props}>
    {props.children}
  </button>
);
