import { breakpoints } from '@/styles/global'
import styled from 'styled-components'

export const HeaderBar = styled.header`
  position: fixed;
  top: 16px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  z-index: 999999;
  transform: translate(-50%);
  background-color: ${({ theme }) => theme.tertiary};
  border: 1px solid ${({ theme }) => theme.primary};
  @media (max-width: ${breakpoints.smScreen}) {
    flex-direction: column;
    gap: 8px;
  }
  & > div {
    display: flex;
    align-items: center;
  }
`
export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
  @media (max-width: ${breakpoints.smScreen}) {
    font-size: 12px;
    margin-left: 20px;
  }
`
export const LinkItem = styled.li`
  margin-right: 16px;
  & a {
    text-decoration: none;
    font-weight: bold;
  }
`
export const CartButton = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: ${breakpoints.smScreen}) {
    padding-top: 8px;
    border-top: 1px solid ${({ theme }) => theme.quaternary};
  }

  svg {
    display: flex;
    margin-left: 16px;
  }
`
