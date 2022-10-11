import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  width: "100%",
  height: 656,
  maxWidth: 1180,
  padding: "0 1rem 1rem 1rem",

  "& > div": {
    display: "flex",

    "& > div:nth-child(n + 2)": {
      marginLeft: "-3.25rem",
    },
  },

  h1: {
    marginTop: "3rem",
    fontSize: "$xxl",
    color: "$gray100",
  },

  p: {
    marginTop: "1.5rem",
    fontSize: "xl",
    color: "$gray200",
    maxWidth: 560,
    textAlign: "center",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "4rem",
    display: "block",
    fontSize: "$lg",
    color: "$green500",

    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      transition: "color, 0.2s",
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: 140,
  height: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  padding: "0.25rem",
  marginTop: "4rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  objectFit: "cover",
});
