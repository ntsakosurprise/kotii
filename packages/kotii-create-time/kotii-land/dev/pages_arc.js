import About from "/src/pages/about.jsx";
import Connection from "/src/pages/connection.jsx";
import ContactUs from "/src/pages/contact-us.jsx";
import Faqs from "/src/pages/faqs.jsx";
import Home from "/src/pages/index.jsx";
import Pos from "/src/pages/posts/index.jsx";
import Slug from "/src/pages/posts/[slug].jsx";
import Privacy from "/src/pages/privacy.jsx";
import Test from "/src/pages/test.jsx";
import Testing from "/src/pages/testing.jsx";
import Todo from "/src/pages/todo/index.jsx";

const comps = {
  Test,
  Privacy,
  Home,
  Faqs,
  ContactUs,
  About,
  Todo,
  Pos,
  Slug,
  Connection,
  Testing,
};

const routes = [
  {
    path: "/test",
    component: "Test",
  },
  {
    path: "/privacy",
    component: "Privacy",
  },
  {
    path: "/",
    component: "Home",
  },
  {
    path: "/faqs",
    component: "Faqs",
  },
  {
    path: "/contact-us",
    component: "ContactUs",
  },
  {
    path: "/about",
    component: "About",
  },
  {
    path: "/todo",
    component: "Todo",
  },
  {
    path: "/pos",
    component: "Pos",
  },
  {
    path: "/pos/:slug",
    component: "Slug",
  },
  {
    path: "/connection",
    component: "Connection",
  },
  {
    path: "/testing",
    component: "Testing",
  },
  // {
  //   path: "/test.jsxxxx",
  //   component: "Test.jsxxxx",
  // },
];

export { comps, routes };
