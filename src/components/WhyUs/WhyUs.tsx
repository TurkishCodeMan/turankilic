import React from "react";

export function WhyUs() {
  return (
    <section id="whyus">
      <article>
        <header>
          <div className="explore">
            <p>
              Yenilikçi bir bakış açısı, çevre ve insan yaşamına duyduğumuz
              sorumluluk bilinci ile modern yaşam alanları inşa etmek temel
              ilkelerimizdir.
            </p>
            <a className="btn" href="#hero">Keşfet</a>
          </div>
          <h4>
            Yenilikçi,
            rekabetçi ve güven inşa eden bir vizyona sahibiz.
          </h4>
        </header>

        <div className="content">
               <div className="content-image">
                    <img src="construction.png" alt="" />
                </div> 
               <dl>
                    <dt className="blue">01</dt>
                    <dd>Dürüstlük, açıklık, tarafsızlık ve güven</dd>
                    <dt className="orange">02</dt>
                    <dd>Kaliteye önem vermek</dd>
                    <dt className="green">03</dt>
                    <dd>Sürekli iyileştirme ve yenilikçilik</dd>
               </dl>
        </div>
      </article>
    </section>
  );
}

