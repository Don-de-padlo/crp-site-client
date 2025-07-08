import type { SxProps, Theme } from "@mui/material"

const headerNavLinkSx: SxProps<Theme> ={
    px: 2,
    py: 1,
    fontWeight: 400,
    fontSize: "12px",
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    "&:hover": {
        textDecoration: "underline",
        color: "white"
    },
}

export default headerNavLinkSx