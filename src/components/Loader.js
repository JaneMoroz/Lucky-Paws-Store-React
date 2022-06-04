import React from "react";

const Loader = ({ color }) => {
  if (color) return <div className="loader white"></div>;
  return <div className="loader"></div>;
};

export default Loader;
