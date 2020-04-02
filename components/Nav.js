import React from "react";
import Link from "next/link";
import "./Nav.scss";

const Nav = ({ settings }) => (
  <nav className="main-nav" role="navigation">
    <ul>
      <Link href="/">
        <a>home</a>
      </Link>
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
);

export default Nav;
