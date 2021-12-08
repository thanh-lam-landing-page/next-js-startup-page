const theme = {
  // example colors with dark mode
  colors: {
    text: "#343D48",
    text_secondary: "#02073E",
    heading: "#0F2137",
    heading_secondary: "#0F2137",
    background: "#FFFFFF",
    background_secondary: "#F9FBFD",
    border_color: "#E5ECF4",
    yellow: "#FFA740",
    primary: "#EA3A60",
    secondary: "#2563FF",
    muted: "#E4E4E4",
    accent: "#609",
    // highlight a background color for highlighting text
    // modes: {
    //   dark: {
    //     text: "#fff",
    //     background: "#000",
    //     primary: "#0cf",
    //     secondary: "#09c",
    //     muted: "#111",
    //   },
    // },
  },

  breakpoints: ["480px", "640px", "768px", "1024px", "1220px", "1366px", "1620px"],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif",
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ["100%", null, null, "780px", "1020px", "1200px", null, "1310px"],
      px: [4, 6],
    },
    header: {
      color: "#02073E",
      fontWeight: "normal",
      py: 3,
      position: "absolute",
      width: "100%",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    main: {},
  },
  links: {
    default: {
      cursor: "pointer",
    },
    bold: {
      fontWeight: "bold",
    },
    logo: {
      display: "flex",
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, "none"],
    },
    defaultBtn: {
      borderRadius: "45px",
      fontSize: ["14px", null, null, 2],
      letterSpacings: "-0.15px",
      padding: ["12px 20px", null, "15px 30px"],
      "&:hover": {
        color: "white",
        bg: "primary",
      },
    },
    secondary: {
      variant: "buttons.defaultBtn",
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      bg: "transparent",
      padding: ["12px 20px", null, "15px 30px"],
      "&:hover": {
        color: "white",
        bg: "primary",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
    },
  },
};

export default theme;
