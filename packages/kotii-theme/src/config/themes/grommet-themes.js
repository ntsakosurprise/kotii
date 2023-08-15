export const themes = {
  dark: {
    global: {
      font: {
        family: "Roboto",
      },
      backgrounds: { dark: "black", light: "#302d2d" },
    },
  },

  light: {
    global: {
      font: {
        family: "Roboto",
      },
      backgrounds: { dark: "#f5f0f0", light: "white" },
    },
  },

  cherry: {
    /* BEGIN: Mapping Colors to Components */
    global: {
      colors: {
        /* BEGIN: Color Palette Definition */
        ruby: {
          dark: "#d4111e",
          light: "#f58990",
        },
        "ruby!": "#EF3F4C",
        gold: {
          dark: "#df9007",
          light: "#e7b86b",
        },
        "gold!": "#F9B644",
        amethyst: {
          dark: "#9B59B6",
          light: "#C39BD3",
        },
        "amethyst!": "#AF7AC5",
        "grey-1": "#ECE9E3",
        "grey-2": "#CECCC6",
        "grey-3": "#737069",
        "grey-4": "#52504C",
        /* END: Color Palette Definition */
        /* BEGIN: Mapping Colors to Grommet Namespaces */
        background: {
          dark: "grey-4",
          light: "grey-1",
        },
        "background-back": {
          dark: "grey-4",
          light: "grey-1",
        },
        "background-front": {
          dark: "grey-3",
          light: "grey-2",
        },
        brand: "ruby!",
        control: {
          dark: "brand",
          light: "brand",
        },
        input: {
          background: "blue",
        },
        text: {
          dark: "grey-1",
          light: "grey-3",
        },
      },
      focus: {
        border: {
          color: "gold",
        },
      },

      backgrounds: { dark: "#ed9807", light: "#F9B644" },
      /* END: Mapping Colors to Grommet Namespaces */
    },
    anchor: {
      color: {
        dark: "gold",
        light: "amethyst!",
      },
    },
    /* END: Mapping Colors to Components */
  },

  seaWave: {
    global: {
      colors: {
        /* BEGIN: Color Palette Definition */
        ruby: {
          dark: "#d4111e",
          light: "#f58990",
        },
        "ruby!": "#EF3F4C",
        gold: {
          dark: "#df9007",
          light: "#e7b86b",
        },
        "gold!": "#F9B644",
        amethyst: {
          dark: "#9B59B6",
          light: "#C39BD3",
        },
        "amethyst!": "#AF7AC5",
        "grey-1": "#ECE9E3",
        "grey-2": "#CECCC6",
        "grey-3": "#737069",
        "grey-4": "#52504C",
        /* END: Color Palette Definition */
        /* BEGIN: Mapping Colors to Grommet Namespaces */
        background: {
          dark: "grey-4",
          light: "grey-1",
        },
        "background-back": {
          dark: "grey-4",
          light: "grey-1",
        },
        "background-front": {
          dark: "grey-3",
          light: "grey-2",
        },
        brand: "ruby!",
        control: {
          dark: "brand",
          light: "brand",
        },
        input: {
          background: "blue",
        },
        text: {
          dark: "grey-1",
          light: "grey-3",
        },
      },
      focus: {
        border: {
          color: "gold",
        },
      },
      backgrounds: { dark: "#d4111e", light: "#e84f59" },
      /* END: Mapping Colors to Grommet Namespaces */
    },
    /* BEGIN: Mapping Colors to Components */
    anchor: {
      color: {
        dark: "gold",
        light: "amethyst!",
      },
    },
    /* END: Mapping Colors to Components */
  },
};
