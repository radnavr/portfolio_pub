import React from "react";

import Button from "../components/Button";
import DecoLine from "../components/DecoLine";

const Contacts = () => {
  return (
    <section className="section section--contacts" id="contacts">
      <div className="section-heading">
        <h2>GET IN TOUCH</h2>
        <DecoLine indented={true} />
      </div>
      <article className="section-content contacts-content">
        <p>
          I am looking for a job. If you are offering one and I drew your
          attention, please, do not hesitate to contact me. I might be just a
          beginner, but I am first and foremost determined to move myself
          forward and what is the better way than participating in real-life
          projects developed by a professional team…
        </p>
        <div className="button-container">
          <a href="mailto:radnavr@gmail.com">
            <Button
              className="button--top-indent button--right-indent"
              tag="SEND AN EMAIL"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/radek-n%C3%A1vrat-4979a6296/"
            target="-blank"
          >
            <Button
              className="button--top-indent button--left-indent"
              tag="MY LINKEDIN"
            />
          </a>
        </div>
      </article>
      <footer>
        <span className="footer-typo">* * *</span>
      </footer>
    </section>
  );
};

export default Contacts;
