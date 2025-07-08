import type { FC } from "react"
import { Stack } from "@mui/material"
import HeaderNavLink from "../headerNavLink/HeaderNavLink"

const HeaderNavLinks: FC = () => {
  return (
  <Stack direction="row" spacing={2}>
    <HeaderNavLink href="/Log in" label="Log in"/>
    <HeaderNavLink href="/Registration" label="Registration" />
    <HeaderNavLink href="/Docs" label="Docs" />
  </Stack>
  )
}

export default HeaderNavLinks
