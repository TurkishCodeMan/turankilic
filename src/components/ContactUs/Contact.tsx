import React from "react";

export function ContactUs() {
  return (
    <section id="contact">
      <article>
        <header>
          <h2>Bize Ulaşın</h2>
          <a className="btn" href="mailto: turankilic@gmail.com">
            Send Email
          </a>
        </header>
        <div className="information">
          <iframe
            src="https://maps.google.com/maps?0&amp;hl
              =en&amp;q=İstanbul&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="450"
            aria-hidden="false"
          />
        </div>
      </article>
    </section>
  );
}
