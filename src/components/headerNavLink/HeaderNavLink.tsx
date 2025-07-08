import type { FC } from "react";
import { Link, Box } from "@mui/material";
import headerNavLinkSx from "./HeaderNavLink.styles";
import redArrow from "~/assets/img/footer/red-arrow-up.svg";

interface HeaderNavLinkProps {
  href: string;
  label: string;
}

const HeaderNavLink: FC<HeaderNavLinkProps> = ({ href, label }) => (
  <Link href={href} sx={headerNavLinkSx}>
    <Box
      component="span"
      sx={{ display: "flex", alignItems: "center", gap: 1 }}
    >
      {label}
      <img
        src={redArrow}
        alt="red arrow up"
        style={{ width: 10, height: 10 }}
      />
    </Box>
  </Link>
);

export default HeaderNavLink;
