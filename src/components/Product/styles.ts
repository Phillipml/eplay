import styled from 'styled-components'
import { TagStyled } from '@/components/Tag/styles'

type CardProps = {
  background: 'black' | 'gray'
}

export const Card = styled.div<CardProps>`
  background-color: ${({ background, theme }) =>
    background === 'black' ? theme.black : theme.gray};
  border-radius: 8px;
  padding: 8px;
  position: relative;

  img {
    width: 100%;
    height: 250px;
    object-fit: contain;
  }

  ${TagStyled} {
    margin-right: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
