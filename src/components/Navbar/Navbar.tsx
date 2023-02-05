import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaBackspace, FaHamburger, FaMoon, FaSun } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { useLocalStorage } from "usehooks-ts";

export const useLoaded = () => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => setLoaded(true), []);
  return loaded;
};
export function Navbar() {
  const router = useRouter();
  const path = router.pathname;
  const [isDarkTheme, setDarkTheme] = useLocalStorage("dark-mode", true);

  const loaded = useLoaded();
  React.useEffect(()=>{
    if(isDarkTheme) {
      return window.document.body.classList.add('dark')
    }
    return window.document.body.classList.remove('dark')

  },[isDarkTheme])


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
          <li className={path == "/" ? "selected" : ""}>
            <Link href="/">Anasayfa</Link>
          </li>
          {
            path!='/gallery' &&  <li>
            <Link href="#whyus">Biz Kimiz</Link>
          </li>
          }
        
          <li className={path == "/gallery" ? "selected" : ""}>
            <Link href="/gallery">Galeri</Link>
          </li>
          {
            path!='/gallery' && <li>
            <Link href="#contact">İletişim</Link>
          </li>
          }
          <li>
            <label htmlFor="dark">
              <input
                type="checkbox"
                checked={isDarkTheme}
                onChange={() => setDarkTheme((curr) => !curr)}
                id="dark"
              />
              <span className="ball">
                {isDarkTheme && loaded ? (
                  <FaSun color="#F0BB00" />
                ) : (
                  <FaMoon color="#F0BB00" />
                )}
              </span>
            </label>
          </li>
          <div className="vector">
            <img src="vector.png" alt="" />
          </div>
          <div className="vector">
            <img src="vector.png" alt="" />
          </div>
        </ul>
      </nav>
      <a href="#" className="backdrop" tabIndex={-1} hidden></a>
    </header>
  );
}
