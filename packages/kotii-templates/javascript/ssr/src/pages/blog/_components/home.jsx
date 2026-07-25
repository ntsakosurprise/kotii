

import React, { useEffect, useState, useCallback, startTransition } from 'react';
import { Helmet } from 'react-helmet';


import BlogHeader from './blogheader/blogheader.jsx';
import PrimaryPosts from './primaryposts/primaryposts.jsx';
import SecondaryPosts from './secondaryposts/secondaryposts.jsx';
import { Interactive } from 'kotii';
// import ErrorHandler from '../ClientErrorHandler/component';

const BlogHome = ({ posts }) => {
  console.log("THE PARSED MARKDOWN", posts)

 





  return (
    <article className="blog">
      
      <Helmet>
        <title>Jobbri - Blog | Home</title>
      </Helmet>
      <Interactive>
      <BlogHeader />
      <PrimaryPosts posts={posts} width={1200} onClick={()=>{
        console.log("TEST MATCH ON HOME")
      }}/>
      <SecondaryPosts posts={posts}  width={1200} />
      <strong className="clearfix" />
      </Interactive>
    </article>
  );
};


export default BlogHome

