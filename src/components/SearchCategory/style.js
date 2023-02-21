import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
  return {
    search: {
      border: "1px solid #DCE0E5",
      padding: "5px 8px",
      fontFamily: "Manrope",
      fontSize: 14,
    },
    searchLine: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    searchCategory: {
      width: "calc(100% - 80px)",
      display: "flex",
    },
    searchNewCategory: {
      width: "25%",
    },
    noBorderRight: {
      borderRight: 0,
    },
    searchParentCategory: {
      width: "75%",
    },
    addButton: {
      backgroundColor: "#36BFB6",
      fontSize: 15,
      color: "#FFFFFF",
      textTransform: "capitalize",
      padding: "0px 18px",
      fontFamily: "Manrope",
      "&:hover": {
        backgroundColor: "#28817b",
      },
    },
    breadcrumbs: {
      border: "1px solid #DCE0E5",
      display: "flex",
      alignItems: "center",
      paddingLeft: 5,
    },
    noBorder: {
      borderWidth: 0,
    },
    breadcrumbsBtn: {
      textTransform: "capitalize",
      padding: "4px 10px",
      backgroundColor: "#DCE0E5",
      color: "#2F353D",
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#CDE3FF",
      },
    },
  };
});
