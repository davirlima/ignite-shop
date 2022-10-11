import { styled } from "..";

export const HeaderContainer = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: "2rem 1rem",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  zIndex: "2",

  button: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 6,
    backgroundColor: "#202024",
    border: "none",
    cursor: "pointer",

    span: {
      position: "absolute",
      top: -7,
      right: -7,
      lineHeight: 1.6,
      borderRadius: "50%",
      color: "$white",
      background: "$green500",
      padding: " 0px 7px",

      border: "3px solid $gray900",
    },
  },
});
