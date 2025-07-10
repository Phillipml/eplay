import styled from 'styled-components'
import { MainContainer } from '@/styles/global'
export const Items = styled.ul`
  display: flex;
`
export const Action = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(17, 17, 17, 0.73);
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  opacity: 0;
  svg {
    width: 40px;
    height: 40px;
  }
`

export const Item = styled.li`
  position: relative;
  margin-right: 16px;

  img {
    object-fit: cover;
    border: 2px solid ${({ theme }) => theme.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
  iframe {
    border: 2px solid ${({ theme }) => theme.white};
    border-radius: 8px;
    width: 150px;
    height: 150px;
    cursor: pointer;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: 0.5s ease;
    }
  }
`
export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.73);
  z-index: 1000;
  &.visible {
    display: flex;
  }
`
export const ModalContainer = styled(MainContainer)`
  max-width: 960px;
  z-index: 1000;

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 24px;
    h4 {
      font-size: 18;
      font-weight: bold;
    }
    svg {
      width: 40px;
      height: 40px;
      cursor: pointer;
    }
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  iframe {
    width: 100%;
    height: 80vh;
    object-fit: contain;
    border: none;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.73);
`
