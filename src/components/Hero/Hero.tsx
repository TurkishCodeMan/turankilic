import Link from "next/link";
import React from "react";


export function Hero() {
  return (
    <section id="hero">
      <div className="hero-top">
        <div className="hero-description">
          <h2>
            <span>Size konforlu </span>bir yaşam sunmak için{" "}
            <span>çalışıyoruz.</span>
          </h2>
          <p>
            İnşaat sektöründe 30 yıldır faaliyetlerini sürdüren Beydağ İnşaat,
            insana ve doğaya saygılı olan, çağın gerekliliklerini bir arada
            sunmayı ve teknolojiden üst düzeyde faydalandıran bir kuruluştur.
          </p>
          <div className="links">
            <a className="btn" href="#whyus">Keşfet</a>
            <a className="btn outline" href="#contact">İletişim</a>
          </div>

          <dl>
            <dt className="orange">25,356</dt>
            <dd>Tamamlanan Proje</dd>
            <dt className="blue">15,200</dt>
            <dd>Devam Eden Proje</dd>
            <dt className="green">50+</dt>
            <dd>Çalışanlar</dd>
          </dl>
        </div>
        <div className="hero-image">
          <img src="home.png" alt="" />
        </div>
      </div>
      <div className="vector"><img src="vector.png" alt="" /></div>
      <div className="hero-brands">
        <ul>
          <li>
            <span>Hase</span>
          </li>
          <li>
            <span>Asana</span>
          </li>
          <li>
            <span>Buzzzz</span>
          </li>
          <li>
            <span>Toggle </span>
          </li>
          <li>
            <span>Walmart</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
