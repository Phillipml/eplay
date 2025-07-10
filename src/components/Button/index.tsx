import { ButtonStyled, ButtonLink } from './styles'

export type ButtonProps = {
  children: string
  type?: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({
  children,
  type = 'button',
  title,
  to,
  onClick,
  variant = 'primary'
}: ButtonProps) => {
  if (type === 'button') {
    return (
      <ButtonStyled type="button" title={title} onClick={onClick} variant={variant}>
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
