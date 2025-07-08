import { AppBar, Toolbar, Box } from "@mui/material"
import HeaderLogo from "~/components/headerLogo/HeaderLogo"
import HeaderSlogan from "~/components/headerSlogan/HeaderSlogan"
import HeaderNavLinks from "~/components/headerNavLinks/HeaderNavLinks"
import HeaderSocialIcons from "~/components/headerSocailIcons/HeaderSocialIcons"
import HeaderActionButton from "~/components/headerActionButton/HeaderActionButton"

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "black", color: "white" }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <HeaderLogo />
          <HeaderSlogan />
        </Box>

        <Box display="flex" alignItems="center" gap={3}>
          <HeaderNavLinks />
          <HeaderSocialIcons />
          <HeaderActionButton />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
