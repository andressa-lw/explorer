import { Button } from "../../components/Button"
import { Header } from "../../components/Header"

import { GoPlus } from "react-icons/go"

import { Cards, TopTitle } from "./styles"
import { Card } from "../../components/Card"

export function Home() {
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <TopTitle>
            <h1>Meus filmes</h1>
            <Button title="Adicionar filme" icon={GoPlus} to="/new" highlighted="true" />
          </TopTitle>

          <Cards>
            <Card
              data={{
                title: "Interestellar",
                link: "/details",
                rating: 4,
                description:
                  "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que",
                tags: [
                  { id: "1", title: "Ficção Científica" },
                  { id: "2", title: "Drama" },
                  { id: "3", title: "Família" },
                ],
              }}
            />

            <Card
              data={{
                title: "Interestellar",
                link: "/details",
                rating: 4,
                description:
                  "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que",
                tags: [
                  { id: "1", title: "Ficção Científica" },
                  { id: "2", title: "Drama" },
                  { id: "3", title: "Família" },
                ],
              }}
            />

            <Card
              data={{
                title: "Interestellar",
                link: "/details",
                rating: 4,
                description:
                  "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que",
                tags: [
                  { id: "1", title: "Ficção Científica" },
                  { id: "2", title: "Drama" },
                  { id: "3", title: "Família" },
                ],
              }}
            />
          </Cards>
        </div>
      </main>
    </>
  )
}
