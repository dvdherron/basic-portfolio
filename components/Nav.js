import React from "react";
import Link from "next/link";
import "./Nav.scss";

const Nav = ({ settings }) => (
  <div className="nav--container">
    <nav role="navigation">
      <ul>
        {settings &&
          settings.content.main_nav.map((navitem, index) => (
            <li key={index}>
              <Link href={navitem.link.cached_url}>
                <a>{navitem.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  </div>
);

export default Nav;
