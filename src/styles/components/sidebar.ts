import { keyframes, styled } from "..";
import * as Dialog from "@radix-ui/react-dialog";

const sidebar = keyframes({
  "0%": {
    right: "-100%",
  },
  "100%": {
    rigth: 0,
  },
});

export const SidebarContainer = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  zIndex: "3",

  animation: `${sidebar} 0.2s ease 0s forwards`,

  width: "33%",
  height: "stretch",
  padding: "4.5rem 3rem 3rem 3rem",

  background: "$gray800",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  ".title": {
    fontSize: "$md",
  },

  "@media screen and (max-width: 425px)": {
    width: "50%",
    padding: "4.5rem 1.5rem 3rem 1.5rem",
  },
});

export const CloseButton = styled(Dialog.Close, {
  position: "absolute",

  top: "1.5rem",
  right: "1.5rem",

  border: "none",
  background: "none",
  color: "$gray300",

  cursor: "pointer",

  "&:hover": {
    transition: "color 0.2s",
    color: "$gray200",
  },
});

export const CardContainer = styled("div", {
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1.5rem",
});

export const Card = styled("div", {
  width: "100%",

  display: "flex",
  alignItems: "center",
  gap: "1.25rem",

  ".img-container": {
    width: 101.94,
    height: 93,

    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    img: {
      objectFit: "cover",
    },
  },

  ".text-container": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    div: {
      h1: {
        fontWeight: "400",
        fontSize: "$md",
        lineHeight: 1.6,
      },
    },

    button: {
      fontSize: "1rem",
      color: "$green500",
      border: "none",
      background: "none",
      cursor: "pointer",
      paddingTop: 10,

      "&:hover": {
        transition: "color 0.2s",
        color: "$green300",
      },
    },
  },
});

export const OrderDetailsContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 7,

  div: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    lineHeight: 1.6,

    strong: {
      fontSize: "$md",
    },
  },
});

export const BuyButton = styled("button", {
  marginTop: "3.5rem",
  width: "100%",
  padding: "1.25rem 0",
  borderRadius: 8,
  border: "0",
  background: "$green500",
  color: "$white",
  fontSize: "$md",
  fontWeight: "bold",
  cursor: "pointer",

  "&:hover": {
    transition: "background 0.2s",
    background: "$green300",
  },
});
