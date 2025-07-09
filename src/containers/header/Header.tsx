import { AppBar, Toolbar, Box } from "@mui/material";
import HeaderLogo from "~/components/headerLogo/HeaderLogo";
import HeaderSlogan from "~/components/headerSlogan/HeaderSlogan";
import HeaderNavLinks from "~/components/headerNavLinks/HeaderNavLinks";
import HeaderSocialIcons from "~/components/headerSocailIcons/HeaderSocialIcons";
import HeaderActionButton from "~/components/headerActionButton/HeaderActionButton";
import headerSx from "./Header.style";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={headerSx}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={5}>
          <HeaderLogo />
          <HeaderSlogan />
          <HeaderNavLinks />
          <HeaderSocialIcons />
          <HeaderActionButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
