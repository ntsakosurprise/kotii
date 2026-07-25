// components/BlogPost.tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import BlogArticle from './blogArticle.jsx';

const BlogPost = ({post,related=[]}) => {


  console.log("THE POST LOCATION")
  console.log("post")
   console.log("THE POST COMPONENT",post)
   
  // if (isFetching) {
  //   return (
  //     <article
  //       className="post"
  //       style={{ height: '100vh', width: '70%', paddingLeft: '17%', position: 'relative' }}
  //     >
  //       <Helmet>
  //         <title>Jobbri - Blog | Post</title>
  //       </Helmet>
  //       <ProgressBarCircular style={{ width: '100%' }} />
  //     </article>
  //   );
  // }

  // if (message.trim()) return <ErrorHandler errorMeta={getErrorMeta('error')} />;
  // if (!post) return <ErrorHandler errorMeta={getErrorMeta('warn')} />;

  return (
    <article className="post">
      <Helmet>
        <title>Jobbri - Blog | {post.title || 'Post'}</title>
      </Helmet>

      <BlogArticle
        post={post}
        posts={related}
        width={1200}
        
      /> 
    </article>
  );
};

export default BlogPost;
