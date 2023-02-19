import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    categoryContainer: {
      height: "100%",
      padding: "100px 0",
    },
    categoryBox: {
      backgroundColor: "#F4F6F8",
      padding: "20px 40px",
      borderRadius: 10,
      fontFamily: "Manrope",
    },
    search: {
      border: "1px solid #DCE0E5",
      padding: "5px 8px",
      fontSize: 14,
    },
  };
});
