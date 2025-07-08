import type { SxProps, Theme } from "@mui/material"
import { lighten } from "@mui/system"

const iconButtonSx: SxProps<Theme> = {
    color: "white",
    backgroundColor:"#131c24",
    borderRadius: "12px",
    padding: 1,
    transition: "background-color 0.2s, color 0.2s",
    "& svg": {
        color: "white"
    },
    "&:hover": {
        backgroundColor: lighten("#7a86b6", 0.1)
    }
}

export default iconButtonSx