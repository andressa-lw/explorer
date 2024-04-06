import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Background, Container, Form } from "./styes"

import { MdOutlineEmail, MdLockOutline } from "react-icons/md"

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input type="email" placeholder="E-mail" icon={MdOutlineEmail} />
        <Input type="password" placeholder="Senha" icon={MdLockOutline} />

        <Button title="Entrar" isFull />

        <ButtonText to="/register" title="Criar conta" />
      </Form>

      <Background />
    </Container>
  )
}
