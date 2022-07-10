import './style.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <strong>React Nutri</strong>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
      </ul>
    </header>
  )
}
