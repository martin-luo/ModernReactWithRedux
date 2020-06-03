import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={"ui secondary pointing menu"}>
      <Link to={"/"} className={"item"}>
        Steamy
      </Link>
      <div className={"right menu"}>
        <Link to={"/"} className={"item"}>
          All Steams
        </Link>
      </div>
    </header>
  );
};

export { Header };
