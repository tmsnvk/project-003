const theme = {
  color: {
    primaryDark: "#3f3b3b", // almost black
    primaryMid: "#c7c8cc", // gray/blue-ish
    primaryLight: "#f3f3f1", // light gray
    secondary: "#0c2cbb", // dark blue
    alternate: "#dc8b18", // orange
    warning: "#d90e00", // red
    shadow: "#424242", // almost black
    gradient: "radial-gradient(circle, #f3f3f1, #c7c8cc)"
  },
  fontFamily: {
    main: `"Roboto", sans-serif`,
    secondary: `"Open Sans", sans-serif`
  },
  fontSize: {
    default: "1rem",
    small: "1.2rem",
    medium: "1.5rem",
    large: "2rem",
    xLarge: "3rem",
    xxLarge: "5rem"
  },
  elementBorder: {
    padding: "1rem 1rem 1rem 1rem",
    boxShadow: "1px 2px 5px 1px",
    border: "solid 1px #e1e2df",
    borderRadius: "1rem",
  },
  mediaQuery: {
    xSmall: "320px",
    small: "480px",
    medium: "768px",
    large: "992px",
    xLarge: "1200px"
  }
};

export default theme;