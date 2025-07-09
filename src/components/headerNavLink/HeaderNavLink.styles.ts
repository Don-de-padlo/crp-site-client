import type { SxProps, Theme } from "@mui/material";

const headerNavLinkSx: SxProps<Theme> = {
  display: "inline-flex",
  alignItems: "center",
  gap: 1,
  cursor: "pointer",
  px: 2,
  py: 1,
  fontSize: "0.75rem",
  fontFamily: `"Montserrat", sans-serif`,
  fontWeight: 500,
  color: "white",
  textDecoration: "none",
  lineHeight: 1,
  borderBottom: "1px solid transparent",
  transition: "border-color 0.2s ease",
  "&:hover": {
    borderBottom: "1px solid",
    color: "white"
  },
};

export default headerNavLinkSx;
