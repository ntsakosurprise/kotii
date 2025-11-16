const routes = [{
  "path": "/test",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Test",
  "requiresData": null
}, {
  "path": "/privacy",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Privacy",
  "requiresData": null
}, {
  "path": "/",
  "alias": "/home",
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Home",
  requiresData: async function (store) {
    return store.dispatch(actions.showPeopleList());
  }
}, {
  "path": "/faqs",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Faqs",
  "requiresData": null
}, {
  "path": "/contact-us",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "ContactUs",
  "requiresData": null
}, {
  "path": "/about",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "About",
  "requiresData": null
}, {
  "path": "/todo",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Todo",
  "requiresData": null
}, {
  "path": "/pos",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Pos",
  "requiresData": null
}, {
  "path": "/pos/:slug",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Slug",
  "requiresData": null
}, {
  "path": "/connection",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Connection",
  "requiresData": null
}, {
  "path": "/testing",
  "alias": null,
  "view": true,
  "viewty": "modular",
  "viewso": "react",
  "title": "REACT SERVE-SIDE RENDERING COMPONENT",
  "method": "GET",
  "type": "public",
  "name": "Testing",
  "requiresData": null
}];
export default routes;