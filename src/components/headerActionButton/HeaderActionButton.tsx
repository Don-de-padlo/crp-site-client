import type { FC } from "react"
import { Button } from "@mui/material"
import headerActionButtonSx from "~/components/headerActionButton/HeaderActionButton.style"

interface HeaderActionButtonProps {
    label?: string
    onClick?: () => void
}

const HeaderActionButton: FC<HeaderActionButtonProps> = ({ label = "Provide Liquidity", onClick }) => {
    return (
        <Button variant="contained" onClick={onClick} sx={headerActionButtonSx}>
            {label}
        </Button>
    )
}

export default HeaderActionButton