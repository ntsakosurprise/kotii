import React from "react";

const HeroText = () => {
  return (
    <section className="home__hero__text">
      <div className="home__hero__text--cont">
        <p className="home__hero__text--primary">
          <small className="home__hero__text--primary-tx">
            Made to easily onboard new Developers{" "}
          </small>
          <small className="home__hero__text--primary-tx">
            Made to{" "}
            <span className="home__hero__text--primary-tx-hi">
              be simple and intuitive
            </span>
          </small>

          <small className="home__hero__text--primary-dot">.</small>
        </p>
        {/* <p className="home__hero__text--secondary">
          <small className="home__hero__text--secondary-tx">
            Made to{" "}
            <span className="home__hero__text--secondary-tx-hi">
              be simple and intuitive
            </span>
          </small>
          <small className="home__hero__text--secondary-dot">.</small>
        </p> */}
      </div>
      <button className="home__hero__text--btn">Get started</button>
    </section>
  );
};

export default HeroText;
