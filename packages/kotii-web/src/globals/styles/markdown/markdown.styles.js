export const markDownStyles = `.markdown {
    font-size: 16px;
    line-height: 1.4;

  }
  .markdown pre {
    font-size: 15px;
    white-space: pre;
  }
  .markdown p {
    color: inherit;
    font-size: 16px;
    font-weight: 400;
    display: block;
  }
  .markdown p + p {
    margin-top: 16px;
  }
  .markdown img {
    margin-top: 16px;
    max-width: 100%;
    display: inline;
    border-radius: 4px;
    transition: box-shadow 0.2s;
    display: block;
    margin: 12px 0;
  }
  .markdown img:hover {
    cursor: pointer;
    transition: box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .markdown em {
    color: inherit;
    font-size: inherit;
    font-style: italic;
  }
  .markdown strong {
    color: inherit;
    font-size: inherit;
    font-weight: 700;
  }
  .markdown ul,
  .markdown ol {
    color: inherit;
    margin: 8px 0;
    margin-left: 16px;
  }
  .markdown li {
    color: inherit;
    font-size: 16px;
    margin-bottom: 4px;
    line-height: 1.5;
    font-weight: 400;
  }
  .markdown blockquote {
    
    padding: 4px 8px 4px 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    margin: 16px 0;
    word-break: break-all;
  }
  .markdown blockquote p {
    margin-top: 0;
  }
  .markdown a {
    
    font-weight: 500;
    text-decoration: none;
    font-size: inherit;
    word-wrap: break-word;
    line-height: inherit;
  }
  .markdown a:hover {
    text-decoration: underline;
  }
  .markdown a:visited {
    opacity: 0.6;
    transition: opacity 0.2s ease-in;
  }
  .markdown code {
    font-family: 'Input Mono', 'Menlo', 'Inconsolata', 'Roboto Mono', monospace;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.4px;
   
    padding: 2px 4px;
    display: inline;
    width: 100%;
  
    border-radius: 4px;
    margin-bottom: 16px;
  }
  .markdown pre {
    margin: 16px 0;
    display: block;
    border-radius: 4px;
 
  }
  .markdown pre code {
    padding: 8px 16px;
    display: block;
    white-space: pre;
    position: relative;
    margin: 0;
    border: none;
    background: none;
  }
  .markdown div[data-block='true'] {
    margin-top: 12px;
  }
  .markdown div[data-block='true']:first-of-type {
    margin-top: 0;
  }
  .markdown span[data-text='true'] {
    line-height: 1.4;
  }
  .markdown code span {
    max-width: 100%;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .markdown iframe {
    margin: 1rem 0;
  }
  .markdown hr {
    width: 100%;
    height: 1px;
    
    display: block;
    margin: 32px 0;
  }
  .markdown h1 {
    font-size: 24px;
    line-height: 40px;
   
    font-weight: 800;
    margin-top: 1rem;
    margin-bottom: 8px;
  }
  .markdown h2 {
    font-size: 20px;
    line-height: 32px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
  }
  .markdown h3 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
  }
  .markdown h4 {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }
  .markdown h5 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }
  .markdown h6 {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 8px;
    text-transform: lowercase;
    font-variant: small-caps;
  }
  .threadComposer textarea {
    line-height: 1.5;
    height: calc(100% + 48px)!important;
  }
  
  .tippy-backdrop {
    background-color: red;
  }
`;
