import type { FC } from "react";
import { Link, Box } from "@mui/material";
import headerNavLinkSx from "./HeaderNavLink.styles";
import redArrow from "~/assets/img/footer/red-arrow-up.svg";

interface HeaderNavLinkProps {
  href: string;
  label: string;
}

const HeaderNavLink: FC<HeaderNavLinkProps> = ({ href, label }) => (
  <Link href={href} sx={{ textDecoration: "none", color: "inherit" }}>
    <Box
      component="span"
      sx={headerNavLinkSx}
    >
      {label}
      <img
        src={redArrow}
        alt="red arrow up"
        style={{ width: 13, height: 13 }}
      />
    </Box>
  </Link>
);

export default HeaderNavLink;
