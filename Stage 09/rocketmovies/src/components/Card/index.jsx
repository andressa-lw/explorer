import { Link } from "react-router-dom"
import { Rating } from "../../components/Rating"
import { Tag } from "../../components/Tags"
import { Container, Tags } from "./styles"

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <Link to={data.link}><h2>{data.title}</h2></Link>
      <Rating grade={data.rating} isSmall />
      <p>{data.description}</p>

      {data.tags && (
        <Tags>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.title} />
          ))}
        </Tags>
      )}
    </Container>
  )
}
