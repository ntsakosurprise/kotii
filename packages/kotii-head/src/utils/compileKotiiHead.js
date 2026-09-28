export const compileKotiiHead = (headArray) => {
  console.log("THE HEAD ARRAY", headArray);
  let titleStr = "";
  let htmlAttrStr = "";

  // Storage dictionaries for deterministic merging (Deepest child entry overrides parent)
  const metaStore = {};
  const linkStore = {};
  const scriptStore = {};

  headArray.forEach((instance) => {
    // 1. Process Title (Last In Wins)
    if (instance.title) {
      if (typeof window === "undefined") {
        titleStr = `<title>${instance.title}</title>`;
      } else {
        titleStr = instance.title;
      }
    }

    // 2. Process Metas Array
    if (Array.isArray(instance.metas)) {
      instance.metas.forEach((meta) => {
        // Special case: Document configuration properties like lang map directly to the html tag
        if (meta.lang) {
          htmlAttrStr = `lang="${meta.lang}"`;
          return;
        }
        // Generate a deduplication key using metadata identifiers (name, property, charset, etc.)
        const uniqueKey =
          meta.name ||
          meta.property ||
          meta.charSet ||
          meta["http-equiv"] ||
          JSON.stringify(meta);
        metaStore[uniqueKey] = meta;
      });
    }

    // 3. Process Links Array
    if (Array.isArray(instance.links)) {
      instance.links.forEach((link) => {
        // Stylesheets stack progressively, while unique assets like favicons or canonicals deduplicate by their relational key
        const uniqueKey =
          link.rel === "stylesheet"
            ? link.href || JSON.stringify(link)
            : link.rel || JSON.stringify(link);
        linkStore[uniqueKey] = link;
      });
    }

    // 4. Process Scripts Array
    if (Array.isArray(instance.scripts)) {
      instance.scripts.forEach((script) => {
        // Deduplicate scripts by their source URL to avoid executing the same remote file multiple times
        const uniqueKey = script.src || JSON.stringify(script);
        scriptStore[uniqueKey] = script;
      });
    }
  });

  // Helper utility to turn object configurations into attribute string markup
  const stringifyAttributes = (obj) => {
    let stringifiedHeadItem = Object.entries(obj)
      .map(([k, v]) => `${k}="${v}"`)
      .join(" ");
    console.log("STRINGIFIED HEAD ITEM", stringifiedHeadItem);
    return;
  };

  let compiledHeadInfo = {
    htmlAttributes: htmlAttrStr,
    title: titleStr,
    meta: Object.values(metaStore)
      .map((m) => `<meta ${stringifyAttributes(m)} />`)
      .join("\n    "),
    link: Object.values(linkStore)
      .map((l) => `<link ${stringifyAttributes(l)} />`)
      .join("\n    "),
    script: Object.values(scriptStore)
      .map((s) => `<script ${stringifyAttributes(s)}></script>`)
      .join("\n    "),
    rawMeta: metaStore,
    rawScripts: scriptStore,
    rawLinks: linkStore,
  };
  console.log("THE COMPILED HEAD", compiledHeadInfo);
  return compiledHeadInfo;
};
