import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { Background, Container, Form } from "./styes"

import { MdOutlineEmail, MdLockOutline, MdOutlinePermIdentity, MdArrowBack } from "react-icons/md"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={MdOutlinePermIdentity } />
        <Input type="email" placeholder="E-mail" icon={MdOutlineEmail} />
        <Input type="password" placeholder="Senha" icon={MdLockOutline} />

        <Button title="Cadastrar" isFull />

        <ButtonText icon={MdArrowBack} to="/" title="Voltar para o login" />
      </Form>

      <Background />
    </Container>
  )
}
