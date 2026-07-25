import { Interactive } from 'kotii';
import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'kotii-router';


const BlogRelated = ({ posts }) => {
 
  const navigate = useNavigate()
  const months = useMemo(() => [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
  ], []);

  const getDate = (date) => {
    const d = new Date(date);
    const day = d.getDate();
    const formattedDay = day < 10 ? `0${day}` : day;
    return `${months[d.getMonth()]} ${formattedDay}, ${d.getFullYear()}`;
  };


    const openPage = (path, state) => {
      navigate(path,state)
      // const { topic, url } = path;
      // return push(`${url}${topic}`);
    };
  

//   const boxesStyling = {
//     backgroundColor:
//       themeName === 'dark'
//         ? theme.colors.complimentary['accent-3']
//         : theme.colors.complimentary.base,
//   };

//   const boxesStylingA = { backgroundColor: theme.colors.complimentary.foreground };
//   const boxesStylingAccent = { backgroundColor: theme.colors.complimentary.base };
//   const textColorStyles = { color: theme.colors.complimentary.foreground };
//   const textColorStylesAccent = {
//     color:
//       themeName === 'dark'
//         ? theme.colors.complimentary['accent-2']
//         : theme.colors.complimentary.foreground,
//   };

  const filteredPosts = posts.length > 3 ? posts.slice(0, 3) : posts;

  const getRelated = ({ relatedPost, i }) => {
    const { slug, image, title, created_at, author } = relatedPost;
    const url = `/blog/post/${slug}`;

    return (
      <div
        key={i}
        className="post__related--post"
        onClick={(e) => openPage({ slug, url }, e)}
        style={{ cursor: 'pointer' }}
      >
        <section className="post__related--post-card-rect">
          <span className="post__related--post-card-rect-info">{getDate(created_at)}</span>
        </section>

        <section className="post__related--post-card-rect post__related--post-card-rect-2">
          <img src={image} className="post__related--post-pik" />
        </section>

        <section className="post__related--post-container">
          <h2 className="post__related--post-title" >
            {title}
          </h2>
          <span className="post__related--post-author">By {author} Mashele</span>
        </section>
      </div>
    );
  };

  return (
    <Interactive>
    <div className="post__related">
      <section className="post__related--post-wrap">
        <h2 className="post__related--title" >
          Related posts
        </h2>

        {filteredPosts.map((post, i) =>
          getRelated({ relatedPost: post, i })
        )}

        <strong className="clearfix" />
      </section>
    </div>
    </Interactive>
  );
};

export default BlogRelated;
