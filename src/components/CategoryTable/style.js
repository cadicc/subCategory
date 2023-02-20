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
    productColumn: { width: "30%" },
  };
});
