import type { FC } from 'react'
import logo from '~/assets/img/header/logo.svg'

const HeaderLogo: FC = () => (
    <img src={logo} alt='Eternal logo' style={{ height: '40px'}} />
)

export default HeaderLogo
