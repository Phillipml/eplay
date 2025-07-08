import styled from 'styled-components'
import banner from '@/assets/images/banner-spider-man.png'
import { TagStyled } from '@/components/Tag/styles'
import { MainContainer } from '@/styles/global'

export const Image = styled.div`
  display: block;
  width: 100%;
  height: 560px;
  background-image: url(${banner});
  background-size: 110%;
  background-position: 100% 35%;
  background-repeat: no-repeat;
  font-weight: bold;
  ${MainContainer} {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  ${TagStyled} {
    position: absolute;
    top: 32px;
    left: 0;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`
export const Prices = styled.p`
  font-size: 24px;
  max-width: 450px;
  margin-top: 24px;
  span {
    text-decoration: line-through;
  }
`
