import React from "react";

import "./Button.css";

export default ({ className, ...props }) => (
  <button className={`mt-de-button ${className || ""}`} {...props}>
    {props.children}
  </button>
);
