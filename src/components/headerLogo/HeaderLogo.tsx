import type { FC } from 'react'
import logo from '~/assets/img/header/logo.svg'

const HeaderLogo: FC = () => (
    <img src={logo} alt='Eternal logo' style={{ height: '40px', width: "204px"}} />
)

export default HeaderLogo
