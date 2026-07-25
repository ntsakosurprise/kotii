import React, { useContext } from "react";
import { Link, useNavigate } from "kotii-router";
import { Interactive } from "kotii";


const SecondaryPosts = ({ posts }) => {
 
  console.log("SECONDARY POSTS", posts)

    const navigate = useNavigate()
   
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
  // const textColorStyles = { color: theme.colors.complimentary.foreground };
  // const textColorStylesAccent = {
  //   color:
  //     themeName === "dark"
  //       ? theme.colors.complimentary["accent-2"]
  //       : theme.colors.complimentary.foreground,
  // };

  // --- Companion Posts ---
  const renderCompanionPost = (post, i) => {
    if (i <= 2) return null;

    const { slug, title, body, created_at= "2023-03-10", image, post_topic_name } = post;
    const linkPath = post.path

    return (
      <div className="blog__secondary--post" key={slug || i}>
        <section className="blog__secondary--post-figda" onClick={()=>openBlogPage(linkPath,{post:post})}>
          {/* <Link to={linkPath} className="link d-block"> */}
            <figure className="blog__secondary--post-fig">
              <img
                src={image}
                className="blog__secondary--post-pik"
                alt={title}
              />
            </figure>
            <small className="blog__secondary--post-date">
              {getDate(created_at)}
            </small>
          {/* </Link> */}
        </section>

        <section className="blog__secondary--post-conti" onClick={()=>openBlogPage(linkPath,{post:post})}>
          {/* <Link to={linkPath} className="link d-block"> */}
            <h2
              className="blog__secondary--post-title"
              // style={textColorStyles}
            >
              {title}
            </h2>
            <p
              className="blog__secondary--post-content"
              // style={textColorStylesAccent}
            >
              {getPreviewText(body)}
            </p>
          {/* </Link> */}
          <button
            className="blog__secondary--post-tag"
            onClick={(e) =>
              openBlogPage({ topic: post_topic_name, url: "/blog/topic/" }, e)
            }
          >
            #{post_topic_name}
          </button>
        </section>
        <strong className="clearfix" />
      </div>
    );
  };

  // --- Render ---
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="blog__secondary">
      <Interactive>
      <section className="blog__secondary--posts">
        {posts.map((p, i) => renderCompanionPost(p, i))}
      </section>

      <section className="blog__secondary--views">
        <Link to="/blog/archive" className="link d-block">
          <button className="blog__secondary--views-v">View</button>
          <button className="blog__secondary--views-a">Archives</button>
        </Link>
      </section>
      </Interactive>
    </div>
  );
};

export default SecondaryPosts;
