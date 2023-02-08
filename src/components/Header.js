import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item" children="accordion" />

      <Link href="/list" className="item" children="list" />

      <Link href="/dropdown" className="item" children="dropdown" />

      <Link href="/translate" className="item" children="translate" />
    </div>
  );
};

export default Header;
