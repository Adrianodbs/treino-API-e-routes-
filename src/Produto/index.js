import { useParams } from 'react-router-dom'

export default function Produto() {
  const { id } = useParams()
  return (
    <div>
      <h1>Página dos produtos</h1>
      <span>Meu produto é {id}</span>
    </div>
  )
}
