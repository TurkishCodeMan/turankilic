import Link from "next/link";
import React from "react";
import { FaBackspace, FaHamburger } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";

export function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>Beydağı İnşaat</h1>
        <a
          href="#main-menu"
          id="main-menu-toggle"
          className="menu-toggle"
          aria-label="Open main menu"
        >
          <span className="sr-only">Open main menu</span>
          <HiMenu size={28} />
        </a>
      </div>
      <nav id="main-menu" className="main-menu">
        <a href="#main-menu-toggle" className="menu-close">
          <span className="sr-only">close main menu</span>
          <FaBackspace size={25} style={{ marginRight: 4 }} />
        </a>
        <ul>
          <li className="selected">
            <Link href="#home">Anasayfa</Link>
          </li>
          <li>
            <Link href="#whyus">Biz Kimiz</Link>
          </li>
          <li>
            <Link href="/gallery">Galeri</Link>
          </li>
          <li>
            <Link href="#contact-us">İletişim</Link>
          </li>
          <div className="vector">
            <img src="vector.png" alt="" />
          </div>
          <div className="vector">
            <img src="vector.png" alt="" />
          </div>
          
        </ul>
      </nav>
      <a href="#main-menu-toggle" className="backdrop" tabIndex={-1} hidden></a>
    </header>
  );
}
