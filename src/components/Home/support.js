import React from "react";
import Icon from "@material-ui/core/Icon";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";

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
          Backed by a supportive and reliable team!
        </p>

        <p className="home__support__rt--emo">
          <Icon>
            <EmojiEmotionsIcon
              style={{
                fontSize: "150px",
                position: "absolute",
                bottom: "120px",
                left: "40%",
                color: "green",
              }}
            />
          </Icon>
        </p>
      </section>
      <strong className="clearfix" />
      <button className="home__support__btn">Explore docs</button>
    </div>
  );
};

export default SupportContent;
