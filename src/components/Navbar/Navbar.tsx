import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>Beydağı İnşaat</h1>
      </div>
      <nav>
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
        </ul>
      </nav>
    </header>
  );
}
