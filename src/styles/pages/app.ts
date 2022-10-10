import { styled } from "..";

export const Container = styled("div", {
  minWidth: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
});

export const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 1rem",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 6,
    backgroundColor: "#202024",
    border: "none",
  },
});
