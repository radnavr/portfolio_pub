import React from "react";
import { useMediaQuery } from "react-responsive";

import Button from "../components/Button";
import DecoLine from "../components/DecoLine";

const AboutMe = () => {
  const isDevice = useMediaQuery({ query: "(max-width: 1023px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isPhone = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <section className="section" id="aboutMe">
      <div className="section-heading">
        <h2>TO BE A DEVELOPER</h2>
        <DecoLine indented={true} />
      </div>
      <article className="section-content about-me-content">
        <div className="about-me-text">
          <p>
            In a nutshell, I'm a Czech guy who wants to be a web developer. The
            story is more complicated, however, and my path to tech is not a
            straightforward one. Originally, I studied arts and I intended to
            stay in academia. Even though I enjoyed Ph.D. studies and work that
            came with it, during that period, I reached a decision that it was
            not the way. Being incidentally interested in computing for a time
            (I actually taught its social history), I've tried some actual
            programming and quickly became hooked. In autumn of 2022 I quit the
            university, started to code more steadfastly and fell in love with
            the unique blend of solving riddles, experimenting and doing
            research that coding offers. Now, here I am. Equipped with HTML,
            CSS, JavaScript (including React and Node), I'm determined to
            venture into web development and find my first genuine tech job. If
            it interests you, please, look around, you can check my resume or
            some of my projects here.
          </p>
          <a
            href="https://drive.google.com/file/d/10fukzSQERWRrdxeKCnz-LqoLJxjyKypx/view?usp=sharing"
            target="-blank"
          >
            <Button className="button--top-indent" tag="MY RESUME" />
          </a>
        </div>
        <figure
          className={
            isDevice && !isPhone && isPortrait
              ? "my-photo-portrait"
              : "my-photo-landscape"
          }
        ></figure>
      </article>
    </section>
  );
};

export default AboutMe;
