import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let links = [
    {
      link: "/",
      id: 1,
      title: "Home page",
    },
    {
      link: "/add",
      id: 2,
      title: "Add Page",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <Link key={link.id} to={link.link}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Header;
