import { Typography } from "@mui/material"
import { headerSloganSx } from "./HeaderSlogan.style"

const HeaderSlogan = () => {
  return (
    <Typography variant="subtitle2" sx={headerSloganSx}>
      Stop fighting for liquidity
    </Typography>
  )
}

export default HeaderSlogan;
