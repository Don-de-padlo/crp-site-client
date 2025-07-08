import type { FC } from "react"
import { Stack } from "@mui/material"
import { Telegram, Twitter } from "@mui/icons-material"
import Discord from "~/assets/img/header/discord.svg"

import HeaderSocialIcon from "../headerSocialIcon/HeaderSocialIcon"

const HeaderSocialIcons: FC = () => {
  return (
    <Stack direction="row" spacing={1}>
      <HeaderSocialIcon
        href="https://discord.com"
        imgSrc={Discord}
        label="Discord"
      ></HeaderSocialIcon>
      <HeaderSocialIcon
        href="https://t.me"
        icon={Telegram}
        label="Telegram"
      ></HeaderSocialIcon>
      <HeaderSocialIcon
        href="https://twitter.com"
        icon={Twitter}
        label="Twitter"
      ></HeaderSocialIcon>
    </Stack>
  )
} 

export default HeaderSocialIcons
