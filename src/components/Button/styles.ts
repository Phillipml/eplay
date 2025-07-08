import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }
`
export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.white};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
  }
`
