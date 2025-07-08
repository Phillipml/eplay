import LogoSvg from '@/assets/images/logo.svg?react'
import styled from 'styled-components'

export const EplayLogo = styled(LogoSvg)`
  path {
    fill: ${({ theme }) => theme.white};
  }
`
