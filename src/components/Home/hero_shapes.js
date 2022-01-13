import React from "react";

const HeroShapes = () => {
  return (
    <section className="home__hero__shapes">
      <div className="home__hero__shapes--1"></div>
      <div className="home__hero__shapes--2"></div>
      <div className="home__hero__shapes--3">
        <section className="home__hero_shapes--content">
          <div>icon</div>
          <div className="home__hero_shapes--content-fds">
            <button>
              <span>icon</span>
              <span>redux</span>
            </button>
          </div>
        </section>
        <small className="home__hero__text--secondary-tx">
          Made to easily onboard new Developer
        </small>
        <small className="home__hero__text--secondary-dot">.</small>
      </div>
    </section>
  );
};

export default HeroShapes;
