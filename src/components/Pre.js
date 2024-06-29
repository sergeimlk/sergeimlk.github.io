// Pre.js
import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"} className={props.load ? "fast-spin" : ""}></div>
  );
}

export default Pre;
