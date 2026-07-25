import React, { useEffect, useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { toast } from 'react-toastify';
// import * as navigatorActions from '../ReduxFirstNavigator/actions';
// import * as blogrActions from '../Blogr/actions';
// import ProgressBarCircular from '../ProgressBarCircular/component';
import BlogHeader from './blogheader/blogheader.jsx';
import PrimaryPosts from './primaryposts/primaryposts.jsx';
import SecondaryPosts from './secondaryposts/secondaryposts.jsx';
// import ErrorHandler from '../ClientErrorHandler/component';

const BlogHome = ({ blogr, actions }) => {
//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const { fetchBlogPosts, removeMessage, removeNotification, push } = actions;
//   const { isFetching = false, message = '', posts = [], isActionSuccessful } = blogr;

  // Update window dimensions
//   const updateWindowDimensions = useCallback(() => {
//     setDimensions({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   }, []);

  // Handle componentDidMount and componentWillUnmount
//   useEffect(() => {
//     updateWindowDimensions();
//     window.addEventListener('resize', updateWindowDimensions);

//     if (posts.length === 0) fetchBlogPosts();

//     return () => {
//       window.removeEventListener('resize', updateWindowDimensions);
//       if (message.trim()) removeMessage();
//     };
//   }, []);

  // Handle componentDidUpdate
//   useEffect(() => {
//     if (message.trim()) {
//       notify({ message, type: 'error', className: 'notify-error' });
//       removeMessage();
//     }

//     if (isActionSuccessful) removeNotification();
//   }, [message, isActionSuccessful]);



//   const retryOnError = useCallback(() => {
//     fetchBlogPosts();
//   }, [fetchBlogPosts]);

//   const getErrorMeta = (color = 'warn') => {
//     let messageText = '';
//     let header = '';
//     let headerText = '';

//     if (color === 'warn') {
//       messageText = 'We have unfortunately encountered an issue getting blog posts';
//       header = 'OH SNAP!';
//       headerText = 'Blog posts could not load!';
//     } else {
//       messageText = 'We have unfortunately encountered an error processing a request';
//       header = 'OOPS!';
//       headerText = 'Something went wrong!';
//     }

//     return {
//       header,
//       headerText,
//       errorText: messageText,
//       buttonText: 'Please Try Again',
//       actionColor: color,
//       postErrorAction: retryOnError,
//     };
//   };

//   const notify = (config) => {
//     const { message } = config || '';
//     const type = config.type || 'info';

//     toast[type](message, {
//       position: toast.POSITION.BOTTOM_LEFT,
//       ...config,
//     });
//   };

  // Rendering
//   if (isFetching) {
//     return (
//       <article
//         className="blog"
//         style={{
//           height: '100vh',
//           width: '70%',
//           paddingLeft: '17%',
//           position: 'relative',
//         }}
//       >
//         <Helmet>
//           <title>Jobbri - Blog | Home</title>
//         </Helmet>
//         <ProgressBarCircular style={{ width: '100%' }} />
//       </article>
//     );
//   }

//   if (message.trim()) {
//     return <ErrorHandler errorMeta={getErrorMeta('error')} />;
//   }

//   if (posts.length === 0) {
//     return <ErrorHandler errorMeta={getErrorMeta('warn')} />;
//   }

  return (
    <article className="blog">
      <Helmet>
        <title>Jobbri - Blog | Home</title>
      </Helmet>
      <BlogHeader />
      <PrimaryPosts blogr={blogr} width={dimensions.width} />
      <SecondaryPosts blogr={blogr}  />
      <strong className="clearfix" />
    </article>
  );
};


export default BlogHome
