import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    backgroundGrey: {
      backgroundColor: "#DCE0E5",
    },
    fullHeight: {
      minHeight: 1080,
      height: "100%",
    },
  };
});
