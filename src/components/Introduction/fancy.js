import React from "react";

const FancyContent = () => {
  return (
    <div className="home__fancy">
      <section className="home__fancy__lt">
        <p className="home__fancy__lt--tx">
          Bend the project to your liking, own it
        </p>
        <p className="home__fancy__lt--elp"></p>
      </section>
      <section className="home__fancy__rt">
        <div className="home__fancy__rt--blob">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#4E6CB4"
              d="M45.6,-62.3C60.8,-51.8,75.8,-40.7,80.9,-26.1C85.9,-11.4,81,6.6,73.3,21.8C65.5,36.9,55,49.1,42.4,61.5C29.7,74,14.8,86.6,-1,88C-16.9,89.4,-33.7,79.5,-45.8,66.9C-57.9,54.3,-65.3,38.9,-69.7,23.1C-74.2,7.4,-75.7,-8.9,-73.2,-26C-70.7,-43.2,-64.1,-61.2,-51.3,-72.4C-38.4,-83.6,-19.2,-87.9,-2,-85.1C15.2,-82.4,30.5,-72.7,45.6,-62.3Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="home__fancy__rt--shape">
          <p className="home__fancy__rt--shape-tx">
            By going through our project documentation, you'll be setting
            yourself for a great time!
          </p>
        </div>
      </section>
      <strong className="clearfix" />
    </div>
  );
};

export default FancyContent;
