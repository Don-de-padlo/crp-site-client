import { Typography, Box } from "@mui/material";
import { headerSloganSx } from "./HeaderSlogan.style";

const HeaderSlogan = () => {
  return (
    <Box sx={{ borderLeft: "3px solid #ff7e51", marginLeft: "20px"}}>
      <Typography variant="subtitle2" sx={headerSloganSx}>
        Stop fighting for liquidity
      </Typography>
    </Box>
  );
};

export default HeaderSlogan;
