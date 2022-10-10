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
  padding: "2rem 1rem",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
});
