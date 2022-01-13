import React from "react";

const SupportContent = () => {
  return (
    <div className="home__support">
      <section className="home__support__lt">
        <div className="home__support__lt--sq"></div>
        <div className="home__support__lt--shape">
          <p className="home__support__lt--shape-tx">
            By going through our project documentation, you'll be setting
            yourself for a great time!
          </p>
        </div>
      </section>

      <section className="home__support__rt">
        <p className="home__support__rt--tx">
          Backed by a supportive and reliable team
        </p>
        <p className="home__support__rt--emo">
          <i class="fa fa-smile-o" aria-hidden="true"></i>
        </p>
      </section>
      <strong className="clearfix" />
    </div>
  );
};

export default SupportContent;
