import React from "react";

export function Footer() {
  return (
    <footer>
     <div>
     <div className="lists">
        <ul>
          <li>
            <h1>Beydağı İnşaat</h1>
            <p>
                Kalite ve Güvenin Vazgeçilmez Adresi
            </p>
          </li>
        </ul>
      </div>

      <address>
        <a href="#home">Beydağı</a> İnşaat
        <br />
        1954 Hekimhan, Meydan
        <br />
        Malatya, CA 44400
        <br />
        +90 (123) 456
        <br />
        kaiju@example.com
        <br />
        <a href="https://twitter.com/" target="_blank">
          Twitter
        </a>
        <br />
        <a href="https://www.facebook.com/" target="_blank">
          Facebook
        </a>
      </address>
     
     </div>
     <p>
        <small>
          Disclaimer: Beydağı İnşaat
          <a href="https://beydaginsaat.com/#home" target="_blank">
            Beydağı İnşaat
          </a>
          by Hüseyin ALTIKULAÇ in 2023.
        </small>
      </p>
      <div className="vector"><img src="vector.png" alt="" /></div>

    </footer>
  );
}
