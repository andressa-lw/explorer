import { Container } from "./styles"

export function Button({
  icon: Icon,
  title,
  highlighted = true,
  isFull = false,
  disabled = false,
  loading = false,
  onClick,
  ...rest
}) {
  return (
    <Container
      disabled={disabled}
      highlighted={highlighted}
      isFull={isFull}
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon />}
      {loading ? "Carregando..." : title}
    </Container>
  )
}
