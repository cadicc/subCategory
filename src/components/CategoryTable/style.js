import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => {
  return {
    tableHeader: {
      backgroundColor: "#E5EAF0",
      padding: "12px 16px",
      display: "flex",
      color: "2F353D",
      fontSize: 14,
      fontWeight: 700,
      "& span:first-child": {
        width: "70%",
      },
      "& span:last-child": {
        width: "30%",
      },
    },
    productColumn: {},
    categoryParentRow: {
      width: "70%",
      display: "flex",
      alignItems: "center",
    },
    subCategoryRow: {
      width: "calc(100% - 312px)",
      display: "flex",
      alignItems: "center",
    },
    subListRow: {
      width: "calc(100% - 313px)",
      display: "flex",
      alignItems: "center",
    },
    itemtRow: {
      width: "calc(100% - 311px)",
      display: "flex",
      alignItems: "center",
      "& div:first-child": {
        minWidth: 30,
      },
    },
    categoryActived: {
      backgroundColor: "#D2E6FF",
    },
  };
});
