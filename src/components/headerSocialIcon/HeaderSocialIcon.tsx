import type { FC } from "react";
import { IconButton } from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";
import iconButtonSx from "~/components/headerSocialIcon/HeaderSocialIcon.style";

interface HeaderSocialIconProps {
  href: string;
  icon?: SvgIconComponent;
  label: string;
  imgSrc?: string;
}

const HeaderSocialIcon: FC<HeaderSocialIconProps> = ({
  href,
  icon: Icon,
  label,
  imgSrc,
}) => {
  return (
    <IconButton component="a" href={href} arial-label={label} sx={iconButtonSx}>
      {Icon ? (
        <Icon fontSize="small" />
      ) : imgSrc ? (
        <img src={imgSrc} alt={label} style={{ width: 20, height: 20 }} />
      ) : null}
    </IconButton>
  );
};

export default HeaderSocialIcon;
