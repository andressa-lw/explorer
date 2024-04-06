import { MdArrowBack, MdOutlineCameraAlt } from "react-icons/md";
import { Avatar, Container, Form } from "./style";
import { Input } from "../../components/Input";

import { MdOutlineEmail, MdLockOutline, MdOutlinePermIdentity } from "react-icons/md"
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText icon={MdArrowBack} title="Voltar" to="/" />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/andressa-lw.png" alt="" />
          <label htmlFor="avatar">
            <MdOutlineCameraAlt />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input type="text" placeholder="Andressa Benedette" icon={MdOutlinePermIdentity } />
        <Input type="email" placeholder="andressa@lumosweb.com.br" icon={MdOutlineEmail} />
        <Input type="password" placeholder="Senha atual" icon={MdLockOutline} />
        <Input type="password" placeholder="Nova senha" icon={MdLockOutline} />

        <Button title="Salvar" isFull />
      </Form>
    </Container>
  )
}