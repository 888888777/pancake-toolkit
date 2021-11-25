import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "40px",
    padding: "0 24px",
    fontWeight: "normal",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
    fontWeight: "normal",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
    fontWeight: "normal",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "greyPrimary",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "greyPrimary",
    boxShadow: "none",
    color: "greyPrimary",
    ":disabled": {
      color: "disableGrey",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "text",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "greyPrimary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
  [variants.STEEL]: {
    boxShadow: "none",
    borderColor: "steelBorder",
    borderWidth: "1px",
    color: "text",
  },
  [variants.SUCCESS_TEXT]: {
    backgroundColor: "transparent",
    color: "success",
    boxShadow: "none",
  },
};
