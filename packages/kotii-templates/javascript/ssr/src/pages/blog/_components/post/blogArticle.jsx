import React, { useContext, useMemo } from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

import Related from './blogRelated.jsx';
import { Interactive } from 'kotii';
import { useNavigate } from 'kotii-router';

const BlogArticle = ({ post, posts, width }) => {
 
  const navigate = useNavigate()

  const months = useMemo(() => [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
  ], []);

  const getDate = (date) => {
    const setDate = new Date(date);
    const getDate = setDate.getDate();
    const formattedDate = getDate < 10 ? `0${getDate}` : getDate;
    return `${months[setDate.getMonth()]} ${formattedDate}, ${setDate.getFullYear()}`;
  };

  const getHeaderGrafik = (image) => (
    <section className="post__post--text-header-grafik">
      <figure className="post__post--text-header-grafik-fig">
        <img src={image} className="post__post--text-header-grafik-pik" />
      </figure>
    </section>
  );


  const openBlogPage = (path, state) => {
    navigate(path,state)
  
    // const { topic, url } = path;
    // return push(`${url}${topic}`);
  };


  const {
    slug,
    is_primary = 0,
    title,
    body,
    created_at,
    image,
    author,
    post_topic_name="",
  } = post;

  const shareUrl = `https://test.jobbri.co.za/blog/post/${slug}`;

//   const boxesStyling = {
//     backgroundColor: themeName === 'dark'
//       ? theme.colors.complimentary['accent-3']
//       : theme.colors.complimentary.base
//   };

//   const boxesStylingA = { backgroundColor: theme.colors.complimentary.foreground };
//   const boxesStylingAccent = { backgroundColor: theme.colors.complimentary.base };

//   const textColorStyles = { color: theme.colors.complimentary.foreground };
//   const textColorStylesAccent = {
//     color: themeName === 'dark'
//       ? theme.colors.complimentary['accent-2']
//       : theme.colors.complimentary.foreground
//   };

//   const specialStyling = themeName === "dark"
//     ? { backgroundColor: theme.colors.complimentary['accent-3'] }
//     : {};

  return (
    <Interactive>
    <div className="post__post">
      <section className="post__post--text">
        <div className="post__post--text-header bx-raised" >
          {width <= 900 && <h1 className="post__post--text-header-meta-title" >{title}</h1>}
          {width <= 900 && getHeaderGrafik(image)}

          <section className="post__post--text-header-meta">
            {width > 900 && <h1 className="post__post--text-header-meta-title" >{title}</h1>}

            <section className="post__post--text-header-meta-author" title="Post author">
              <div>
                <span className="post__post--text-header-meta-author-by" >By </span>
                <section>
                  <div className="post__post--text-header-meta-author-card-rect bx-raised" />
                  <div className="post__post--text-header-meta-author-card-rect post__post--text-header-meta-author-card-rect-2 bx-raised" />
                  <div className="post__post--text-header-meta-author-card-rect post__post--text-header-meta-author-card-rect-3 bx-raised">
                    <img src="https://res.cloudinary.com/hsjvf6r09/image/upload/v1619088251/jobbri/blog/zhcdavi9bqntbnpmj2ax.png" className="post__post--text-header-meta-author-pik" />
                  </div>
                </section>
                <p className="post__post--text-header-meta-author-wrap">
                  <span className="post__post--text-header-meta-author-name" >
                    {author}
                  </span>
                  <span className="post__post--text-header-meta-author-date">{getDate(created_at)}</span>
                </p>
              </div>

              <div className="post__post--text-social">
                <section className="post__post--text-social-s-wrap">
                  <button className="post__post--text-social-share">Share</button>
                </section>

                <section className="post__post--text-social-p-wrap">
                  <div className="post__post--text-social-p-wrap-1" title="Facebook post share">
                    <FacebookShareButton url={shareUrl} quote={title}>
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>

                  <div className="post__post--text-social-p-wrap-1" title="Twitter post share">
                    <TwitterShareButton url={shareUrl} quote={title}>
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>

                  <div className="post__post--text-social-p-wrap-1" title="Whatsapp post share">
                    <WhatsappShareButton url={shareUrl} quote={title}>
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </div>
                </section>
              </div>
            </section>

            <section className="post__post--text-header-meta-crumb" onClick={(e) => openBlogPage({ topic: post_topic_name, url: '/blog/topic/' }, e)}>
              <p>
                <span className="post__post--text-header-meta-crumb-text">#{post_topic_name}</span>
              </p>
            </section>
            <strong className="clearfix" />
          </section>

          {width > 900 && getHeaderGrafik(image)}
          <strong className="clearfix" />
        </div>

        <div className="post__post--text-wrap">
          <section className="post__post--text-content" >
            <p
              className="post__post--text-content-p"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </section>
        </div>
      </section>

      <strong className="clearfix" />
      {posts.length > 0 && <Related posts={posts} />}
    </div>
    </Interactive>
  );
};

export default BlogArticle;
