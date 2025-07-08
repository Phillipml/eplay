import { ButtonStyled, ButtonLink } from './styles'

type ButtonProps = {
  children: string
  type?: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
}

const Button = ({ children, type = 'button', title, to, onClick }: ButtonProps) => {
  if (type === 'button') {
    return (
      <ButtonStyled type="button" title={title} onClick={onClick}>
        {children}
      </ButtonStyled>
    )
  }
  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
