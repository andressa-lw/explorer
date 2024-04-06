import { Link } from "react-router-dom"
import { Input } from "../Input"
import { Section, Profile } from "./styles"

export function Header() {
  return (
    <Section>
      <div className="container">
        <Link to="/"><h1>RocketMovies</h1></Link>

        <Input placeholder="Pesquisar pelo título" />

        <Profile>
          <div>
            <Link to="/profile"><strong>Andressa Benedette</strong></Link>
            <button>Sair</button>
          </div>

          <img src="https://github.com/andressa-lw.png" alt="Foto do usuário" />
        </Profile>
      </div>
    </Section>
  )
}
