import React from "react";
          import { Route, Router, Switch as Routes } from "wouter";
          
          import Connection from "../kotii-templates/javascript/ssr/src/pages/connection.jsx";
          import ContactUs from "../kotii-templates/javascript/ssr/src/pages/contact-us.jsx";
          import Pos from "../kotii-templates/javascript/ssr/src/pages/posts/index.jsx";
          import Slug from "../kotii-templates/javascript/ssr/src/pages/posts/[slug].jsx";
          import About from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/about.jsx";
          import Faqs from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/faqs.jsx";
          import Home from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/index.jsx";
          import Privacy from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/privacy.jsx";
          import Test from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/test.jsx";
          import Testing from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/testing.jsx";
          // import Test.jsxxxx from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/test.jsxxx.jsxxx";
          import Todo from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/pages/todo/index.jsx";
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