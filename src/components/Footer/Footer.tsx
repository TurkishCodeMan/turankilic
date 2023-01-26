import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

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
        Mehterçeşme mahallesi 1869.Sokak No:54/5
        <br />
        Istanbul
        <br />
        +90 (532) 509 69 44
        <br />
        turankilic44@gmail.com
        <br />
        <FaTwitter size={30} style={{marginRight:15,marginTop:20}}/>
        <FaInstagram size={30} style={{marginRight:15}}/>
        <FaFacebook size={30}/>
      </address>
     
     </div>
     <p>
        <small>
          Disclaimer: Beydağı İnşaat<br/>
          <a href="https://beydaginsaat.com/#home">
            Beydağı İnşaat 
          </a><br/>
          Designed by <a href="">Hüseyin ALTIKULAÇ</a>
        </small>
      </p>
      <div className="vector"><img src="vector.png" alt="" /></div>

    </footer>
  );
}
