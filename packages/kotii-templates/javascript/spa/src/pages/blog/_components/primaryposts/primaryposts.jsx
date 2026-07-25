import React, { useContext,startTransition } from "react";
import { Link } from "kotii-router";
import { Interactive } from "kotii";
import { useNavigate } from 'kotii-router';
const wildDreams = {
  wide:"wild is",
  theDream: "the drea"
}


const PrimaryPosts = ({ posts}) => {
  // const { theme, themeName } = useContext(ThemeContext);
  
  console.log("PRIMARY POSTS",posts)

  const navigate = useNavigate("padayache","mcmillian",posts)
  // --- Helpers ---
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const getDate = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    const formattedDay = day < 10 ? `0${day}` : day;
    return `${months[d.getMonth()]} ${formattedDay}, ${d.getFullYear()}`;
  };

  const getPreviewText = (html) => {
    let plainText = html
    if(typeof window != "undefined"){
     const div = document.createElement("div");
     div.innerHTML = html;
     plainText = div.textContent || div.innerText || "";
    }
   
   
    return `${plainText.slice(0, 200)}...`;
  };



  const openBlogPage = (path, state) => {
    

        navigate(path,state)
  
    // const { topic, url } = path;
    // return push(`${url}${topic}`);
  };

  // --- Styles ---
  // const boxesStyling = {
  //   backgroundColor:
  //     themeName === "dark"
  //       ? theme.colors.complimentary["accent-3"]
  //       : theme.colors.complimentary.base,
  // };
  // const boxesStylingAccent = { backgroundColor: theme.colors.complimentary.base };
  // const textColorStyles = { color: theme.colors.complimentary.foreground };
  // const textColorStylesAccent = {
  //   color:
  //     themeName === "dark"
  //       ? theme.colors.complimentary["accent-2"]
  //       : theme.colors.complimentary.foreground,
  // };

  // --- Primary Post ---
  const renderPrimaryPost = () => {
    if (!posts || posts.length === 0) return null;
    const { slug, title, body="", created_at="2023-03-10", image, author,avatar="" } = posts[1];
    const linkPath = posts[1].path
    console.log("THE PRIMARY POST",slug,title, body)

    return (
      <section className="blog__primary--lg">
        <Interactive>
        <div className="blog__priamry--post" onClick={()=>openBlogPage(linkPath,{post:posts[1]})}>
          {/* <Link to={linkPath} className="link d-block"> */}
            <h2 className="blog__primary--post-lg-title">
              <span
                className="blog__primary--post-lg-title-sp"
                // style={textColorStyles}
              >
                {title}
              </span>
            </h2>

            <section
              className="blog__primary--post-lg-author"
              title="Post author"
            >
              <span className="blog__primary--post-lg-author-name">
                {author}
              </span>
              <img
                src={avatar}
                className="blog__primary--post-lg-author-pik"
                alt={author}
              />
            </section>

            <div className="blog__primary--post-lg-container">
              <small className="blog__primary--post-lg-date">
                {getDate(created_at)}
              </small>
              <figure className="blog__primary--post-lg-fig">
                {/* <LazyLoad height={200} offset={100}> */}
                  <img src={image} className="blog__primary--post-lg-pik" alt={title} />
                {/* </LazyLoad> */}
              </figure>
              <section
                className="blog__primary--post-content"
                // style={textColorStylesAccent}
              >
                <p>{getPreviewText(body)}</p>
              </section>
            </div>

            <strong className="clearfix" />
          {/* </Link> */}
        </div>
        </Interactive>
      </section>
    );
  };

  // --- Companion Posts ---
  const renderCompanionPost = (post, i) => {
    if (i !== 1 && i !== 2) return null;
    const { slug, title, created_at="2023-03-10", image, author } = post;
    const linkPath = post.path

    const linkClass =
      i === 1 ? "link d-block" : "link d-block blog__primary--post-offset";

    return (
      // <Link to={linkPath} className={linkClass} key={slug || i}>
        <div className="blog__priamry--post" onClick={()=>openBlogPage(linkPath,{post:post})}>
          <h2
            className="blog__primary--post-sm-title"
            // style={textColorStyles}
          >
            {title}
          </h2>
          <small className="blog__primary--post-sm-date">
            {getDate(created_at)}
          </small>
          <figure className="blog__primary--post-sm-fig">
            {/* <LazyLoad height={200} offset={100}> */}
              <img src={image} className="blog__primary--post-sm-pik" alt={title} />
            {/* </LazyLoad> */}
          </figure>
          <p style={{ fontSize: "1.5rem",  }}>
            By {author}
          </p>
        </div>
      // </Link>
    );
  };

  // --- Render ---
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="blog__primary">

      
        <Interactive>
          {renderPrimaryPost()}
          <section className="blog__primary--sm">
            {posts.map((p, i) => renderCompanionPost(p, i))}
          </section>
          <strong className="clearfix" />
        </Interactive>
      
      
    </div>
  );
};

export default PrimaryPosts;
