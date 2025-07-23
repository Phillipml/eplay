import { breakpoints } from '@/styles/global'
import styled from 'styled-components'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const DesktopLinks = styled(Links)`
  @media (max-width: ${breakpoints.lgScreen}) {
    display: none;
  }
  @media (max-width: ${breakpoints.smScreen}) {
    font-size: 12px;
    margin-left: 20px;
  }
`

export const MobileLinks = styled(Links)`
  display: none;
  margin-left: 0;
  @media (max-width: ${breakpoints.lgScreen}) {
    font-size: 14px;
    margin-top: 16px;
  }
  &.is-open {
    display: block;
  }

  li a {
    @media (max-width: ${breakpoints.lgScreen}) {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const HeaderBar = styled.header`
  position: fixed;
  top: 16px;
  left: 50%;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  z-index: 888;
  transform: translate(-50%);
  background-color: ${({ theme }) => theme.tertiary};
  border: 1px solid ${({ theme }) => theme.primary};
  @media (max-width: ${breakpoints.lgScreen}) {
    width: 80%;
  }
`
export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.lgScreen}) {
      flex: 1;
      justify-content: space-between;
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;
  & a {
    text-decoration: none;
    font-weight: bold;
  }
  @media (max-width: ${breakpoints.lgScreen}) {
    margin-right: 0;
  }
`
export const CartButton = styled.span`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  background-color: ${({ theme }) => theme.quinary};
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: ${breakpoints.lgScreen}) {
    padding-top: 8px;
    span {
      display: none;
    }
  }

  svg {
    display: flex;
    margin-left: 16px;
  }
`
export const HamgurgerMenu = styled.div`
  display: none;
  max-width: 40px;
  padding: 10px;
  border-radius: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    height: 2px;
    margin-bottom: 4px;
    display: block;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
  }
  @media (max-width: ${breakpoints.lgScreen}) {
    display: flex;
  }
`
