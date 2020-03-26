import React from "react";
import Link from "next/link";

const Nav = ({ settings }) => (
  <nav>
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
);

export default Nav;
