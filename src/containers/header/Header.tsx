import { AppBar, Toolbar, Box } from "@mui/material";
import HeaderLogo from "~/components/headerLogo/HeaderLogo";
import HeaderSlogan from "~/components/headerSlogan/HeaderSlogan";
import HeaderNavLinks from "~/components/headerNavLinks/HeaderNavLinks";
import HeaderSocialIcons from "~/components/headerSocailIcons/HeaderSocialIcons";
import HeaderActionButton from "~/components/headerActionButton/HeaderActionButton";
import headerSx from "./Header.style";

const Header = () => {
  return (
    <AppBar position="fixed" sx={headerSx} elevation={0}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          px: "20px",
          overflowX: "hidden"
        }}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <HeaderLogo />
          <HeaderSlogan />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={{ xs: 1.5, sm: 2, md: 3 }}
          flexWrap="wrap"
        >
          <HeaderNavLinks />
          <HeaderSocialIcons />
          <HeaderActionButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
