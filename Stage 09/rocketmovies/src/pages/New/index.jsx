import { MdArrowBack } from "react-icons/md"
import { Header } from "../../components/Header"
import { Buttons, Categories, Container, Form } from './style'
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { CategoryItem } from "../../components/CategoryItem"

export function New() {
  return (
    <Container>
      <Header />

      <main className="container">
        <Form>
          <header>
            <ButtonText icon={MdArrowBack} title="Voltar" to="/" />
            <h1>Meus filmes</h1>
          </header>
          
          <div className="group">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <p>Marcadores</p>

          <Categories>
            <CategoryItem value="teste"/>
            <CategoryItem isNew placeholder="Nova categoria"/>
          </Categories>

          <Buttons>
            <Button title="Excluir filme" highlighted='false' isFull="true" to="/" />
            <Button title="Salvar alterações" isFull="true" to="/" />
          </Buttons>
          
        </Form>
      </main>
    </Container>
  )
}