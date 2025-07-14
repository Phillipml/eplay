import { useTheme } from 'styled-components'
import { ThemeButtonStyled } from './styles'
import { FaSun, FaMoon } from 'react-icons/fa'

type ThemeButtonProps = {
  onClick: () => void
}

const ThemeButton = ({ onClick }: ThemeButtonProps) => {
  const theme = useTheme()
  return (
    <ThemeButtonStyled onClick={onClick}>
      {theme.secondary === '#111' ? <FaMoon /> : <FaSun />}
    </ThemeButtonStyled>
  )
}

export default ThemeButton
