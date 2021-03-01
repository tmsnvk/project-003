export const handleType = ($type) => {
  switch ($type) {
    case "bug":
      return "radial-gradient(ellipse, #e6e7e4, rgba(198, 210, 112, 0.5))"; // dark green
    case "dark":
      return "radial-gradient(ellipse, #e6e7e4, rgba(162, 146, 136, 0.5))"; // brown
    case "dragon":
      return "radial-gradient(ellipse, #e6e7e4, rgba(162, 125, 250, 0.5))"; // light purple
    case "electric":
      return "radial-gradient(ellipse, #e6e7e4, rgba(250, 224, 120, 0.5))"; // yellow
    case "fairy":
      return "radial-gradient(ellipse, #e6e7e4, rgba(244, 189, 201, 0.5))"; // light pink
    case "fighting":
      return "radial-gradient(ellipse, #e6e7e4, rgba(214, 120, 115, 0.5))"; // light red
    case "fire":
      return "radial-gradient(ellipse, #e6e7e4, rgba(245, 172, 120, 0.5))"; // orange
    case "flying":
      return "radial-gradient(ellipse, #e6e7e4, rgba(198, 183, 245, 0.5))"; // blue/purple
    case "ghost":
      return "radial-gradient(ellipse, #e6e7e4, rgba(162, 146, 188, 0.5))"; // dark purple
    case "grass":
      return "radial-gradient(ellipse, #e6e7e4, rgba(167, 219, 141, 0.5))"; // light green
    case "ground":
      return "radial-gradient(ellipse, #e6e7e4, rgba(235, 214, 157, 0.5))"; // beige
    case "ice":
      return "radial-gradient(ellipse, #e6e7e4, rgba(188, 230, 230, 0.5))"; // cyan
    case "normal":
      return "radial-gradient(ellipse, #e6e7e4, rgba(198, 198, 167, 0.5))"; // khaki
    case "poison":
      return "radial-gradient(ellipse, #e6e7e4, rgba(193, 131, 193, 0.5))"; // light purple
    case "psychic":
      return "radial-gradient(ellipse, #e6e7e4, rgba(250, 146, 178, 0.5))"; // dark pink
    case "rock":
      return "radial-gradient(ellipse, #e6e7e4, rgba(209, 193, 125, 0.5))"; // tan
    case "steel":
      return "radial-gradient(ellipse, #e6e7e4, rgba(209, 209, 224, 0.5))"; // grayish blue
    case "water":
      return "radial-gradient(ellipse, #e6e7e4, rgba(157, 183, 245, 0.5))"; // blue
    default:
      return "#d2d0d0";
  };
};