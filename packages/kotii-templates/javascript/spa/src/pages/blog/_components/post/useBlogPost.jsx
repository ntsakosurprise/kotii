// components/useBlogPost.ts
import { useCallback, useEffect, useState } from 'react';

import { useParams, useNavigate } from 'kotii-router';


export const useBlogPost = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const { slug = '' } = useParams();

  const blogr = useSelector((state) => state.blogr || {});
  const { post, related = [], isFetching = false, message = '', posts = [] } = blogr;

  const updateWindowDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  const removeMessage = useCallback(() => {
    dispatch(blogrActions.removeMessage());
  }, [dispatch]);

  const fetchBlogPostWith = useCallback(
    (slug) => dispatch(blogrActions.fetchBlogPostWith(slug)),
    [dispatch]
  );

  const push = useCallback((url) => dispatch(navigatorActions.push(url)), [dispatch]);

  const retryOnError = useCallback(() => {
    if (!slug.trim()) return push('/404');
    return fetchBlogPostWith(slug);
  }, [fetchBlogPostWith, push, slug]);

  const getErrorMeta = (color = 'warn') => {
    const isWarn = color === 'warn';
    return {
      header: isWarn ? 'OH SNAP!' : 'OOPS!',
      headerText: isWarn ? 'Blog post could not load!' : 'Something went wrong!',
      errorText: isWarn
        ? 'We have unfortunately encountered an issue getting blog post'
        : 'We have unfortunately encountered an error processing a request',
      buttonText: 'Please Try Again',
      actionColor: color,
      postErrorAction: retryOnError,
    };
  };

  const findPostLocally = useCallback(
    (identifier) => {
      return posts.find(
        (p) => p?.slug?.toLowerCase().trim() === identifier?.toLowerCase().trim()
      );
    },
    [posts]
  );

  const openPage = useCallback(
    (path, e) => {
      e.preventDefault();
      const { slug, url } = path;
      if (!slug?.trim()) return push('/404');
      fetchBlogPostWith(slug);
      return push(url);
    },
    [fetchBlogPostWith, push]
  );

  const openBlogPage = useCallback(
    (path, e) => {
      e.preventDefault();
      const { topic, url } = path;
      return push(`${url}${topic}`);
    },
    [push]
  );

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    if (!slug.trim()) return push('/404');
    fetchBlogPostWith(slug);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
      if (message.trim()) removeMessage();
    };
  }, [slug, push, fetchBlogPostWith, message, removeMessage]);

  return {
    dimensions,
    post,
    related,
    isFetching,
    message,
    getErrorMeta,
    openPage,
    openBlogPage,
  };
};
