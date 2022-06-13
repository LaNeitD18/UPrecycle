import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const sizes = {
  // global sizes
  base: 14,
  nav: 56,

  // font sizes
  h1: 36,
  h2: 24,
  h3: 20,
  body: 16,

  // app dimensions
  width,
  height,

  long: width > height ? width : height,
  short: width > height ? height : width,

  fulllandscape: {
    width: width > height ? width : height,
    height: width > height ? height : width
  }
};

export const colors = {
  // base colors
  primary: "#19a07b",
  secondary: "#f6ae2d",

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",
  purple: "#626aff",
  orange: "#ff8b24",
  yellow: "#f1bd00",
  pink: "#ff3d66",
  blue: "#0d8bf8",
  green: "#45cc51",
  cyan: "#00cfce",
  red: "#ee4238",
  brown: "#6f4938",
  grass: "#73c673",
  darkRed: "#cf3a32",
  darkBlue: "#007498",
  darkGrass: "#5baa5b",
  lightCyan: "#bae1f7",

  white98: "rgba(255, 255, 255, 0.98)",
  white80: "rgba(255, 255, 255, 0.8)",
  white50: "rgba(255, 255, 255, 0.5)",
  white12: "rgba(255, 255, 255, 0.12)",
  fadeblack: "rgba(30, 31, 32, 0.25)",
  fadeblack50: "rgba(30, 31, 32, 0.5)",
  black38: "rgba(30, 31, 32, 0.38)",
  black12: "rgba(30, 31, 32, 0.12)",
  smoke: "whitesmoke",
  darkgray: "#898C95",
  transparent: "transparent"
};

export const APIConfigs = {
  BASE_URL: "http://192.168.1.54:5000",
  TIMEOUT_DURATION: 10000
};
