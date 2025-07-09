import type { SxProps, Theme } from "@mui/material";

const headerActionButtonSx: SxProps<Theme> = {
  fontFamily: `"Montserrat", sans-serif`,
  padding: "10px 20px",
  lineHeight: 1.5,
  cursor: "pointer",
  border: "2px solid transparent",
  borderRadius: "10px",
  fontSize: "0.875rem",
  fontWeight: 500,
  color: "white",
  backgroundImage: `linear-gradient(135deg, #e37549 0%, #531c6c 100%),
  linear-gradient(to right, #e37549, #855aa7)`,
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
  boxShadow: "none",
  transition: "background-image 0.3s ease",
  "&:hover": {
    backgroundImage: "none",
    backgroundColor: "#de724b",
    border: "2px solid #de724b"
  }
}

export default headerActionButtonSx
