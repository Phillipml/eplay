import styled from 'styled-components'
import type { TagProps } from '.'

export const TagStyled = styled.div<TagProps>`
  display: inline-block;
  background-color: ${({ theme }) => theme.green};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  font-weight: bold;
  padding: ${({ size }) => (size === 'small' ? '4px 6px' : '8px 16px')};
  border-radius: 8px;
  margin-top: 10px;
`
